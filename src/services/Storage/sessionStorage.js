const getSessionStorage = (localKey) => {
  return JSON.parse(sessionStorage.getItem(localKey));
};

const setSessionStorage = (localKey, value) => {
  return sessionStorage.setItem(localKey, JSON.stringify(value));
};

const removeSessionStorage = (localKey) => {
  sessionStorage.removeItem(localKey);
};

export { getSessionStorage, setSessionStorage, removeSessionStorage };
