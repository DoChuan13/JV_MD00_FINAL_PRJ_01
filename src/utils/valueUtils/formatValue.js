//Currency Format
export const formatCurrency = (currValue, languageCode, currencyCode) => {
  let options = {
    style: "currency",
    currency: currencyCode,
    maximumSignificantDigits: 3,
  };
  /* Optional for other object
  return currValue.toLocaleString(languageCode, options);*/
  return new Intl.NumberFormat(languageCode, options).format(currValue);
};

//Date Format
export const formatDateType = (dateValue, languageCode) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateValue.toLocaleDateString(languageCode, options);
};

//Time Format
export const formatTime = (timeValue, languageCode) => {
  return timeValue.toLocaleTimeString(languageCode);
};

//Number Format
export const formatNumber = (numberValue, languageCode) => {
  let options = {
    maximumSignificantDigits: 3,
  };
  /* Optional for other object
  return currValue.toLocaleString(languageCode, options);*/
  return new Intl.NumberFormat(languageCode, options).format(numberValue);
};
