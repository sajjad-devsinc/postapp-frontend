export const setItem = (itemname, item) => {
  localStorage.setItem(itemname, JSON.stringify(item));
};
export const getItem = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
export const removeItem = (item) => {
  return JSON.parse(localStorage.removeItem(item));
};
