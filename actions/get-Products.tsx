import axios from "axios";

const API_URL = `${process.env.API_STORE}`;

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const arrFeaturedProducts = await fetch(`${API_URL}/product/featured`,{cache: "no-cache"});
  return arrFeaturedProducts.json();
};
