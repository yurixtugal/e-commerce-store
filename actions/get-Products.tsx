import axios from "axios";

const API_URL = `${process.env.API_STORE}`;

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const arrFeaturedProducts = await fetch(`${API_URL}/product/featured`,{cache: "no-cache"});
  return arrFeaturedProducts.json();
};

export const getProductsByCategory = async(idCategory : string): Promise<Product[]> => {
  const arrProductsByCategory = await fetch(`${API_URL}/product/category/${idCategory}`,{cache: "no-cache"});
  return arrProductsByCategory.json();
}