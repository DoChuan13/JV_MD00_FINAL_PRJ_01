//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, hideshowPassWord } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();

let btn_login = document.getElementById("btn_login");
btn_login.addEventListener('click', loginAccount)

//HideShow Password
let togglePassword = document.querySelectorAll(".togglePassword");
for (let i = 0; i < togglePassword.length; i++) {
    togglePassword[i].addEventListener('click', hideshowPassWord)
}

//Write key login to localstorage
function writeLoginKey(first_name, last_name, email, password) {
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    loginStatus = [{
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }];
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus))
    console.log(loginStatus);

}


//Login Account
function loginAccount() {
    let adminAcount = JSON.parse(localStorage.getItem('adminAcount'));

    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');
    if (adminAcount[0].user == email.value) {
        if (adminAcount[0].user == password.value) {
            email.style.border = '3px solid green';
            password.style.border = '3px solid green'
            console.log('%cĐăng nhập thành công', 'color: green');
            window.location.href = '/index.html';
            writeLoginKey('Admin', 'Admin', adminAcount[0].user, adminAcount[0].password);
            return true;
        }
        else {
            email.style.border = '3px solid green';
            password.style.border = '3px solid red'
            console.log('%cSai mật khẩu', 'color: red');
            return false;
        }
    }
    else if (listUserPassword.length == 0) {
        console.log('%cKhông có email người dùng đăng ký', 'color: red');
        return false;
    }
    else {
        for (let i = 0; i < listUserPassword.length; i++) {
            if (listUserPassword[i].email == email.value) {

                if (listUserPassword[i].password == password.value) {
                    email.style.border = '3px solid green';
                    password.style.border = '3px solid green'
                    console.log('%cĐăng nhập thành công', 'color: green');
                    window.location.href = '/index.html';
                    writeLoginKey(listUserPassword[i].first_name, listUserPassword[i].last_name, listUserPassword[i].email, listUserPassword[i].password);
                    return true;
                }
                else if (i == listUserPassword.length - 1) {
                    email.style.border = '3px solid green';
                    password.style.border = '3px solid red'
                    console.log('%cSai mật khẩu', 'color: red');
                    return false;
                }
            }
            else if (i == listUserPassword.length - 1) {
                email.style.border = '3px solid red'
                console.log('%cEmail không tồn tại', 'color: red');
                return false;
            }
        }
    }
}
