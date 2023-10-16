
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductCart = { 
    product: string;
    quantity: number;
    color?: string;
    size?: string;
}

export interface CartShooping {
  items: ProductCart[];
  addItem: (item:ProductCart) => void;
  removeItem: (item:ProductCart) => void;
  reset: () => void;
}

export const useCartShooping = create(persist<CartShooping>((set,get) => ({
  items: [],
  addItem: (item:ProductCart ) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item:ProductCart) => {
    const currentItems = get().items;
    const newItems = currentItems.filter((i) => i.product !== item.product);
    set({ items: newItems });
  },
  reset: () => set({ items: [] }),
}),{
  name: "cart-shooping",
  getStorage: () => localStorage,
}));