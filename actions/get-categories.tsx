const API_URL = `${process.env.API_STORE}`;


export const getCategories = async (): Promise<Category[]> => {
  const arrCategories = await fetch(`${API_URL}/category`,{cache: "no-cache"});
  return arrCategories.json();
};

export const getCategoriesById = async (categoryId: string): Promise<Category> => {
  const category = await fetch(`${API_URL}/category/${categoryId}`,{cache: "no-cache"});
  console.log(category)
  return category.json();
}; 

