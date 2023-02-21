import { getLocalStorage } from "../../services/Storage/localStorage";
import { getSessionStorage } from "../../services/Storage/sessionStorage";

export const disableScroll = () => {
  let body = document.body;
  body.style.overflow = "hidden";
  body.setAttribute("scroll", "no");
};

export const enableScroll = () => {
  let body = document.body;
  body.style.overflow = "auto";
  body.setAttribute("scroll", "yes");
};

export const checkLoginStatus = () => {
  let noneLogin = {
    id: "",
    email: "",
    password: "",
    remember: false,
    typeUser: "",
  };
  let localValue = getLocalStorage("loginStatus");
  let sessionValue = getSessionStorage("loginStatus");
  if (localValue != null) return localValue;
  else if (sessionValue != null) return sessionValue;
  else return noneLogin;
};
