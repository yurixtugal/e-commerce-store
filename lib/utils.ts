import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDetColors = (product: Product) => {
  if (product.isVariant) {
    const colors = product.variants.map((variant) => variant.Color);
    return colors.filter(
      (color, index) =>
        colors.map((color) => color.id).indexOf(color.id) === index
    );
  }
  return null;
};

export const getSize = (product: Product) => {
  if (product.isVariant) {
    const sizes = product.variants.map((variant) => variant.Size);
    return sizes.filter(
      (size, index) => sizes.map((size) => size.id).indexOf(size.id) === index
    );
  }
  return null;
};
