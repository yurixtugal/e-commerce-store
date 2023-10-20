import axios from "axios";

const API_URL = `${process.env.API_STORE}`;
const API_URL_PUBLIC = `${process.env.NEXT_PUBLIC_API_STORE}`;

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const arrFeaturedProducts = await fetch(`${API_URL}/product/featured`,{cache: "no-cache"});
  return arrFeaturedProducts.json();
};

export const getProductsByCategory = async(idCategory : string, page: number, limit: number): Promise<ProductAndPagination> => {
  const arrProductsByCategory = await axios(`${API_URL_PUBLIC}/product/category/${idCategory}?page=${page}&limit=${limit}`);
  return arrProductsByCategory.data;
}

export const getProductById = async(idProduct : string): Promise<Product> => {
  const product = await fetch(`${API_URL}/product/${idProduct}`,{cache: "no-cache"});
  return product.json();
}