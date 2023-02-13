const getLocalStorage = (localKey) => {
  return JSON.parse(localStorage.getItem(localKey));
};

const setLocalStorage = (localKey, value) => {
  return localStorage.setItem(localKey, JSON.stringify(value));
};

export { getLocalStorage, setLocalStorage };
