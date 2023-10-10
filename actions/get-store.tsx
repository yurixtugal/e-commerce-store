import axios from "axios";

const API_URL = `${process.env.API_STORE}`;

export const getStore = async (): Promise<Store> => {
  const store = await fetch(API_URL);
  return store.json();
};
