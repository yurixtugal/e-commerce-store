const API_URL = `${process.env.API_STORE}`;


export const getCategories = async (): Promise<Category[]> => {
  const arrCategories = await fetch(`${API_URL}/category`,{cache: "no-cache"});
  return arrCategories.json();
}; 
