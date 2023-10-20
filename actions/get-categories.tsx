import axios from "axios";

const API_URL = `${process.env.API_STORE}`;
const API_URL_PUBLIC = `${process.env.NEXT_PUBLIC_API_STORE}`;

export const getCategories = async (): Promise<Category[]> => {
  const arrCategories = await fetch(`${API_URL}/category`,{cache: "no-cache"});
  return arrCategories.json();
};

export const getCategoriesById = async (categoryId: string): Promise<Category> => {
  const category = await axios(`${API_URL_PUBLIC}/category/${categoryId}`);
  console.log(category)
  return category.data;
}; 

