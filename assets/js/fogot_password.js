//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, showAlertPopup, hideAlertPopup, } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();

let reset_pass = document.getElementById("reset_pass_sub");
reset_pass.addEventListener('click', sendResetCode)

function sendResetCode() {
    let email = document.getElementById("fogot_pass_input");
    let resetPassCode = JSON.parse(localStorage.getItem('resetPassCode'));

    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    for (let i = 0; i < listUserPassword.length; i++) {
        if (email.value == listUserPassword[i].email) {
            let reset_code = (Math.random() + 1).toString(36).substring();
            // console.log(reset_code);
            resetPassCode = [listUserPassword[i].email, reset_code];
            // console.log(resetPassCode);
            localStorage.setItem('resetPassCode', JSON.stringify(resetPassCode))

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "haitqrikkei@gmail.com",
                Password: "C25575E4F3C7BBDE2F82765E0C4CC804C88D",
                To: `${listUserPassword[i].email}`,
                From: "haitqrikkei@gmail.com",
                Subject: "Reset Password Alert",
                Body: `Đây là mã khôi phục mật khẩu: <b type="color: red">${reset_code}</b>`
            }).then(
                message => alert("Đã gửi mail khôi phuc thành công")
            );
            setTimeout(directToReset, 2000)
        }
        else if (i == listUserPassword.length - 1) {
            showAlertPopup();
            let popup_detail = document.querySelector('#pop_up_alert--detail p')
            popup_detail.innerHTML = `Email không hợp lệ, hoặc  không tồn tại`
            setTimeout(hideAlertPopup, 1000)
        }
    }
}


function directToReset() {
    window.location.href = `/pages/user_pages/resetpassword.html`
}


