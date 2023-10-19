import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductCart = {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
};

export interface CartShooping {
  items: ProductCart[];
  addQuantity: (prodictId: string, colorId: string, sizeId: string) => void;
  decreaseQuantity: (
    prodictId: string,
    colorId: string,
    sizeId: string
  ) => void;
  addItem: (item: ProductCart) => boolean;
  removeItem: (item: ProductCart) => void;
  reset: () => void;
}

export const useCartShooping = create(
  persist<CartShooping>(
    (set, get) => ({
      items: [],
      //addItem: (item:ProductCart ) => set((state) => ({ items: [...state.items, item] })),
      addQuantity: (productId: string, colorId: string, sizeId: string) => {
        console.log(productId, colorId, sizeId);
        const currentItems = get().items;
        let itemExists;

        if (colorId && sizeId) {
          itemExists = currentItems.find(
            (i) =>
              i.product.id === productId &&
              i.color === colorId &&
              i.size === sizeId
          );
        } else {
          itemExists = currentItems.find((i) => i.product.id === productId);
        }
        if (itemExists) {
          const newItems = currentItems.map((i) => {
            if (i.product.isVariant) {
              if (
                i.product.id === productId &&
                i.color === colorId &&
                i.size === sizeId
              ) {
                return { ...i, quantity: i.quantity + 1 };
              }
              return i;
            } else {
              if (i.product.id === productId) {
                return { ...i, quantity: i.quantity + 1 };
              }
              return i;
            }
          });
          set({ items: newItems });
        }
      },
      decreaseQuantity: (
        productId: string,
        colorId: string,
        sizeId: string
      ) => {
        const currentItems = get().items;
        let itemExists;
        if (colorId && sizeId) {
          itemExists = currentItems.find(
            (i) =>
              i.product.id === productId &&
              i.color === colorId &&
              i.size === sizeId
          );
        } else {
          itemExists = currentItems.find((i) => i.product.id === productId);
        }
        if (itemExists) {
          const newItems = currentItems.map((i) => {
            if (i.product.isVariant) {
              if (
                i.product.id === productId &&
                i.color === colorId &&
                i.size === sizeId
              ) {
                if (i.quantity === 1) return i;
                return { ...i, quantity: i.quantity - 1 };
              }
              return i;
            } else {
              if (i.product.id === productId) {
                if (i.quantity === 1) return i;
                return { ...i, quantity: i.quantity - 1 };
              }
              return i;
            }
          });

          set({ items: newItems });
        }
      },
      addItem: (item: ProductCart) => {
        const currentItems = get().items;
        const itemExists = currentItems.find(
          (i) =>
            i.product.id === item.product.id &&
            i.color === item.color &&
            i.size === item.size
        );
        if (itemExists) {
          return false;
        } else {
          set({ items: [...currentItems, item] });
          return true;
        }
      },
      removeItem: (item: ProductCart) => {
        const currentItems = get().items;
        const newItems = currentItems.filter(
          (i) => i.product.id !== item.product.id
        );
        set({ items: newItems });
      },
      reset: () => set({ items: [] }),
    }),
    {
      name: "cart-shooping",
      getStorage: () => localStorage,
    }
  )
);
