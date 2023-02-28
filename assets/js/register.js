//Class set INT
import {
  initLocalDB,
  checkLogin,
  logoutUser,
  rederLoginUI,
  checkEmail,
  checkSubEmail,
  checkFirstName,
  checkLastName,
  checkMobilePhone,
  checkPassword,
  checkRepassword,
  hideshowPassWord,
  showAlertPopup,
  hideAlertPopup,
} from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();

let register_btn = document.getElementById("register_btn");
register_btn.addEventListener("click", registerUser);

//Password Eye show/hidden
let togglePassword = document.querySelectorAll(".togglePassword");
for (let i = 0; i < togglePassword.length; i++) {
  togglePassword[i].addEventListener("click", hideshowPassWord);
}

//Email format check
let email = document.querySelector("#email");
email.addEventListener("change", checkEmail);

//Check Password's length
let password = document.querySelector("#password");
password.addEventListener("change", checkPassword);

//Re-password check
let re_password = document.querySelector("#re_password");
re_password.addEventListener("change", checkRepassword);

//Check First Name Field
let first_name = document.querySelector("#first_name");
first_name.addEventListener("change", checkFirstName);

//Check Last Name Field
let last_name = document.querySelector("#last_name");
last_name.addEventListener("change", checkLastName);

//Check Mobile Phone
let phone = document.querySelector("#phone");
phone.addEventListener("change", checkMobilePhone);

//Validate Password
function checkForm() {
  console.log(checkEmail());
  console.log(checkPassword());
  console.log(checkRepassword());
  console.log(checkFirstName());
  console.log(checkLastName());
  console.log(checkMobilePhone());
  if (
    checkEmail() &&
    checkPassword() &&
    checkRepassword() &&
    checkFirstName() &&
    checkLastName() &&
    checkMobilePhone()
  ) {
    return true;
  } else {
    // console.log("Thông tin không trùng khớp");
    return false;
  }
}

//Register User
function registerUser() {
  if (checkForm()) {
    let listUserPassword = JSON.parse(localStorage.getItem("listUserPassword"));
    let first_name = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let password = document.querySelector("#password").value;
    let re_password = document.querySelector("#re_password").value;
    let id;
    if (listUserPassword.length == 0) {
      id = 0;
    } else {
      id = listUserPassword[listUserPassword.length - 1].id + 1;
    }

    if (listUserPassword.length == 0) {
      if (password == re_password) {
        let new_user = new UserInfo(
          id,
          first_name,
          last_name,
          phone,
          email,
          password
        );
        listUserPassword.push(new_user);
        localStorage.setItem(
          "listUserPassword",
          JSON.stringify(listUserPassword)
        );
        console.log("Đăng ký thành công");
        // fullname = '';
        // email = '';
        // phone = '';
        // password = '';
        // re_password = '';
        window.location.href = "/pages/common_pages/login.html";
        return true;
      } else {
        console.log("Mật khẩu không trùng khớp");
        showAlertPopup();
        let popup_detail = document.querySelector("#pop_up_alert--detail p");
        popup_detail.innerHTML = `Mật khẩu không trùng khớp`;
        setTimeout(hideAlertPopup, 1500);
        return false;
      }
    } else {
      for (let i = 0; i < listUserPassword.length; i++) {
        if (password == re_password) {
          let new_user = new UserInfo(
            id,
            first_name,
            last_name,
            phone,
            email,
            password
          );
          listUserPassword.push(new_user);
          localStorage.setItem(
            "listUserPassword",
            JSON.stringify(listUserPassword)
          );
          window.location.href = "/pages/common_pages/login.html";
          return true;
        } else {
          console.log("Mật khẩu không trùng khớp");
          showAlertPopup();
          let popup_detail = document.querySelector("#pop_up_alert--detail p");
          popup_detail.innerHTML = `Mật khẩu không trùng khớp`;
          setTimeout(hideAlertPopup, 1500);
          return false;
        }
      }
    }
  } else {
    // console.log('dfadfasdfasdf', !checkFirstName() || !checkLastName() || !checkMobilePhone());
    if (!checkFirstName() || !checkLastName() || !checkMobilePhone()) {
      showAlertPopup();
      let popup_detail = document.querySelector("#pop_up_alert--detail p");
      popup_detail.innerHTML = `Vui lòng điền đầy đủ thông tin`;
      setTimeout(hideAlertPopup, 1500);
    } else if (!checkEmail()) {
      showAlertPopup();
      let popup_detail = document.querySelector("#pop_up_alert--detail p");
      popup_detail.innerHTML = `Email không hợp lệ hoặc đã tồn tại`;
      setTimeout(hideAlertPopup, 1500);
    } else if (!checkPassword()) {
      showAlertPopup();
      let popup_detail = document.querySelector("#pop_up_alert--detail p");
      popup_detail.innerHTML = `Mật khẩu không hợp lệ.
                                    Yêu cầu có a-z, A-Z, 0-9, ký tự đặc biệt và dài 8-20`;
      setTimeout(hideAlertPopup, 1500);
    } else if (!checkRepassword()) {
      showAlertPopup();
      let popup_detail = document.querySelector("#pop_up_alert--detail p");
      popup_detail.innerHTML = `Mật khẩu không trùng khớp. Vui lòng thử lại`;
      setTimeout(hideAlertPopup, 1500);
    }
  }
}
