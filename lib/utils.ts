import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
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

export const getAllVariantTypes = (product: Product) => {
  if (product.isVariant){
    return ["Color","Size"]
  }
  return [];
}

export const getValuesByOption = (product: Product, option: string) => {
  if (product.isVariant) {
    if (option === "Color") {
      return getDetColors(product);
    }
    if (option === "Size") {
      return getSize(product);
    }
  }
  return null;
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${queryString}`;
};