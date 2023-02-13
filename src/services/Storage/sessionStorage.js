const getSessionStorage = (localKey) => {
  return JSON.parse(sessionStorage.getItem(localKey));
};

const setSessionStorage = (localKey, value) => {
  return sessionStorage.setItem(localKey, JSON.stringify(value));
};

export { getSessionStorage, setSessionStorage };
