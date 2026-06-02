const STORAGE_KEY = "products";

export const getProducts = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveProducts = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};