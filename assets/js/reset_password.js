//Class set INT
import {
  initLocalDB,
  checkLogin,
  logoutUser,
  rederLoginUI,
  checkPassword,
  checkRepassword,
  hideshowPassWord,
  showAlertPopup,
  hideAlertPopup,
  directToHome,
} from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();

let resetPassCode = JSON.parse(localStorage.getItem("resetPassCode"));

if (resetPassCode.length != 0) {
  let resetPassCode = JSON.parse(localStorage.getItem("resetPassCode"));
  let export_value = document.querySelector(".export_value");
  export_value.innerHTML = `Vui lòng nhập mã khôi phục cho tài khoản ${resetPassCode[0]}`;
}

//Password Eye show/hidden
let togglePassword = document.querySelectorAll(".togglePassword");
for (let i = 0; i < togglePassword.length; i++) {
  togglePassword[i].addEventListener("click", hideshowPassWord);
}

let password = document.querySelector("#password");
password.addEventListener("change", checkPassword);

let re_password = document.querySelector("#re_password");
re_password.addEventListener("change", checkRepassword);

let reset_pass = document.querySelector("#reset_pass_sub");
reset_pass.addEventListener("click", resetCode);

function resetCode() {
  let resetcode = document.querySelector("#resetcode");
  let password = document.querySelector("#password");
  let re_password = document.querySelector("#re_password");

  let resetPassCode = JSON.parse(localStorage.getItem("resetPassCode"));
  let listUserPassword = JSON.parse(localStorage.getItem("listUserPassword"));
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  if (resetcode.value == resetPassCode[1]) {
    for (let i = 0; i < listUserPassword.length; i++) {
      if (
        resetPassCode[0] == listUserPassword[i].email &&
        checkPassword() &&
        checkRepassword()
      ) {
        listUserPassword[i].password = password.value;
        localStorage.setItem(
          "listUserPassword",
          JSON.stringify(listUserPassword)
        );
        loginStatus = [];
        localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
        resetPassCode = [];
        localStorage.setItem("resetPassCode", JSON.stringify(resetPassCode));
        console.log("Mật khẩu đã được khôi phục mới");
        showAlertPopup();
        let popup_detail = document.querySelector("#pop_up_alert--detail p");
        popup_detail.innerHTML = `Mật khẩu mới đã được khôi phục`;
        setTimeout(directToHome, 3000);
      } else {
        console.log("Mật khẩu không trùng khớp");
        showAlertPopup();
        let popup_detail = document.querySelector("#pop_up_alert--detail p");
        popup_detail.innerHTML = `Mật khẩu mới không trùng khớp`;
        setTimeout(hideAlertPopup, 1500);
      }
    }
  } else {
    console.log("Mã khôi phục không chính xác, vui lòng thử lại");
    showAlertPopup();
    let popup_detail = document.querySelector("#pop_up_alert--detail p");
    popup_detail.innerHTML = `Mã khôi phục không chính xác, vui lòng thử lại`;
    setTimeout(hideAlertPopup, 1500);
  }
}
