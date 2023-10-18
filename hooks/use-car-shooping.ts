
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductCart = { 
    product: Product;
    quantity: number;
    color?: string;
    size?: string;
}

export interface CartShooping {
  items: ProductCart[];
  addItem: (item:ProductCart) => boolean;
  removeItem: (item:ProductCart) => void;
  reset: () => void;
}

export const useCartShooping = create(persist<CartShooping>((set,get) => ({
  items: [],
  //addItem: (item:ProductCart ) => set((state) => ({ items: [...state.items, item] })),
  addItem: (item:ProductCart ) => {
    const currentItems = get().items;
    const itemExists = currentItems.find((i) => (i.product.id === item.product.id && i.color === item.color && i.size === item.size));
    if (itemExists) {
      return false;
    } else{
      set({ items: [...currentItems, item] });
      return true;
    }
  },
  removeItem: (item:ProductCart) => {
    const currentItems = get().items;
    const newItems = currentItems.filter((i) => i.product.id !== item.product.id);
    set({ items: newItems });
  },
  reset: () => set({ items: [] }),
}),{
  name: "cart-shooping",
  getStorage: () => localStorage,
}));