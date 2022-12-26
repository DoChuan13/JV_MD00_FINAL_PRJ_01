//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, checkPassword, checkRepassword, hideshowPassWord, showAlertPopup, hideAlertPopup } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();



//Pre load
renderUserInfoTab()
// renderPassInfoTab()
let renderUserInfo_event = document.getElementById('renderUserInfoTab');
renderUserInfo_event.addEventListener('click', renderUserInfoTab)

let changeUserInfo_event = document.getElementById('changeUserInfo');
changeUserInfo_event.addEventListener('click', changeUserInfo)

let updateUserInfo_event = document.getElementById('updateUserInfo');
updateUserInfo_event.addEventListener('click', updateUserInfo)

let renderPassInfo_event = document.getElementById('renderPassInfoTab')
renderPassInfo_event.addEventListener('click', renderPassInfoTab)






//Render User info Group
function renderUserInfoTab() {
    renderUserInfo()
    renderBtnInfo()
    let changeUserInfo_event = document.getElementById('changeUserInfo');
    changeUserInfo_event.addEventListener('click', changeUserInfo)

    let updateUserInfo_event = document.getElementById('updateUserInfo');
    updateUserInfo_event.addEventListener('click', updateUserInfo)
    return true;
}
//1
function renderUserInfo() {
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let result = document.querySelector('.content_main--change_user_info--detail');
    let data = ``;
    for (let i = 0; i < listUserPassword.length; i++) {
        if (loginStatus[0].email == listUserPassword[i].email) {
            data += `<label class="font_label">Họ:</label>
                                <div id="last_name_manager" class="font_input">
                                    ${listUserPassword[i].last_name}
                                </div>
                                <label class="font_label">Tên:</label>
                                <div id="first_name_manager" class="font_input">
                                    ${listUserPassword[i].first_name}
                                </div>
                                <label class="font_label" for="phone">Mobile:</label>
                                <div id="phone_manager" class="font_input">
                                    ${listUserPassword[i].phone}
                                </div>
                                <label class="font_label" for="dateofbirth">Ngày sinh:</label>
                                <div id="dateofbirth_manager" class="font_input">
                                    ${listUserPassword[i].dateofbirth}
                                    </div>
                                <label class="font_label" for="gender">Giới tính:</label>
                                <div id="gender_manager" class="font_input">
                                    ${listUserPassword[i].gender}
                                </div>
                                <label class="font_label" for="email">Email:</label>
                                <div id="email_manager" class="font_input">
                                    ${listUserPassword[i].email}
                                </div>`
            break;
        }
    }
    result.innerHTML = data;
}
//2
function renderBtnInfo() {
    let result = document.querySelector('.edit_btn');
    let data = ``;
    data += `
            <button class="style_button font_btn" type="button" id="changeUserInfo">Sửa thông tin</button>
            <button class="style_button font_btn" type="button" id="updateUserInfo">Lưu thay đổi</button>
            `
    result.innerHTML = data;
}


//Change/Update Use Info Function
var statusEdit = false;
function changeUserInfo() {
    let last_name = document.getElementById('last_name_manager');
    let first_name = document.getElementById('first_name_manager');
    let phone = document.getElementById('phone_manager');
    let dateofbirth = document.getElementById('dateofbirth_manager');
    let gender = document.getElementById('gender_manager');
    // let email = document.getElementById('email_manager');

    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));

    for (let i = 0; i < listUserPassword.length; i++) {
        if (loginStatus[0].email == listUserPassword[i].email) {
            // let gendervalue = listUserPassword[i].gender;
            // console.log(gendervalue);
            last_name.innerHTML = `<input class="font_input" type = "text" name = "last_name" value = "${listUserPassword[i].last_name}">`;
            first_name.innerHTML = `<input class="font_input" type = "text" name = "first_name" value = "${listUserPassword[i].first_name}">`;
            phone.innerHTML = `<input class="font_input" type = "text" name = "phone" value = "${listUserPassword[i].phone}" > `;
            dateofbirth.innerHTML = `<input class="font_input" type = "date" name = "dateofbirth" value = "${listUserPassword[i].dateofbirth}">`;
            gender.innerHTML = `
                <select name = "gender" value = "${listUserPassword[i].gender}" >
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                `;
            // console.log(gender);
        }
    }
    statusEdit = true;
}


function updateUserInfo() {
    if (statusEdit) {
        let last_name = document.getElementById('last_name_manager');
        let first_name = document.getElementById('first_name_manager');
        let phone = document.getElementById('phone_manager');
        let dateofbirth = document.getElementById('dateofbirth_manager');
        let gender = document.getElementById('gender_manager');
        // let email = document.getElementById('email_manager');
        // console.log(gender.childNodes[1].value);
        // console.log(last_name.value, gender.value);

        let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        for (let i = 0; i < listUserPassword.length; i++) {
            if (loginStatus[0].email == listUserPassword[i].email) {
                listUserPassword[i].last_name = last_name.childNodes[0].value;
                listUserPassword[i].first_name = first_name.childNodes[0].value;
                listUserPassword[i].phone = phone.childNodes[0].value;
                listUserPassword[i].dateofbirth = dateofbirth.childNodes[0].value;
                listUserPassword[i].gender = gender.childNodes[1].value;
                // console.log(listUserPassword[i]);
                localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword))

                loginStatus[0].last_name = last_name.childNodes[0].value;
                loginStatus[0].first_name = first_name.childNodes[0].value;
                localStorage.setItem('loginStatus', JSON.stringify(loginStatus))

                last_name.innerHTML = listUserPassword[i].last_name;
                first_name.innerHTML = listUserPassword[i].first_name;
                phone.innerHTML = listUserPassword[i].phone;
                dateofbirth.innerHTML = listUserPassword[i].dateofbirth;
                gender.innerHTML = listUserPassword[i].gender;


                statusEdit = false;
                break;
            }
        }
    }
}


//Render Password Info group
function renderPassInfoTab() {
    renderPassInfo();
    renderBtnInfoPass();
    getValidFunction();
    let updatePassInfo_event = document.getElementById('updatePassInfo');
    updatePassInfo_event.addEventListener('click', updatePassInfo)
    let togglePassword = document.querySelectorAll(".togglePassword");
    for (let i = 0; i < togglePassword.length; i++) {
        togglePassword[i].addEventListener('click', hideshowPassWord)
    }
    return true;
}

//1
function renderPassInfo() {
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let result = document.querySelector('.content_main--change_user_info--detail');
    let data = ``;
    for (let i = 0; i < listUserPassword.length; i++) {
        if (loginStatus[0].email == listUserPassword[i].email) {
            data += `<label class="font_label">Mật khẩu hiện tại:</label>
                                <div id="password_manager" class="font_input">
                                    <input class="font_input" id="current_password" type = "password" name = "current_password" value = "">
                                    <i class="bi bi-eye-slash togglePassword"></i>
                                </div>
                                <label class="font_label">Mật khẩu mới:</label>
                                <div id="new_password_manager" class="font_input">
                                    <input class="font_input" id="password" type = "password" name = "new_password" value = "">
                                    <i class="bi bi-eye-slash togglePassword"></i>
                                </div>
                                <label class="font_label" for="phone">Nhập lại mật khẩu mới:</label>
                                <div id="renew_password_manager" class="font_input">
                                    <input class="font_input" id="re_password" type = "password" name = "repeat_new_password" value = "">
                                    <i class="bi bi-eye-slash togglePassword"></i>
                                </div>
                    `
            break;
        }
    }
    result.innerHTML = data;
}

//2
function renderBtnInfoPass() {
    let result = document.querySelector('.edit_btn');
    let data = ``;
    data += `
            <button class="style_button font_btn" type="button" id="updatePassInfo">Lưu thay đổi</button>
            `
    result.innerHTML = data;
}


//:Validate Password
function getValidFunction() {
    let current_password = document.querySelector('#current_password');
    let password = document.querySelector('#password');
    let re_password = document.querySelector('#re_password')

    current_password.addEventListener('change', checkmatchCurrentPassInfo)
    password.addEventListener('change', checkValidateNewPassword)
    re_password.addEventListener('change', checkRepassword)
}



//Check Match Current Pass
function checkmatchCurrentPassInfo() {
    let current_password = document.querySelector('#current_password');
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    for (let i = 0; i < listUserPassword.length; i++) {
        if (current_password.value == listUserPassword[i].password) {
            console.log('Passwords match!');
            current_password.style.border = '3px solid green';
            return true;
        }
        else {
            console.log('Passwords do NOT match!');
            current_password.style.border = '3px solid red';
            return false;
        }
    }
}


//Check Password's length and curent pass
function checkValidateNewPassword() {
    let current_password = document.querySelector('#current_password');
    let password = document.querySelector('.password');
    if (checkPassword() && current_password.value != password.value) {
        console.log('New password is Match & diffrence with current pass');
        password.style.border = '3px solid green'
        return true;
    }
    else {
        console.log('*Require a-z, A-Z, 0-9, Special char, and length 8-15, Password is NOT Match');
        password.style.border = '3px solid red'
        checkRepassword()
        return false;
    }
}


//Update New Pass Info
function updatePassInfo() {
    if (checkmatchCurrentPassInfo() && checkValidateNewPassword() && checkRepassword()) {
        let current_password = document.querySelector('#current_password');
        let password = document.querySelector('#password');
        let re_password = document.querySelector('#re_password')

        let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        for (let i = 0; i < listUserPassword.length; i++) {
            if (loginStatus[0].email == listUserPassword[i].email) {
                listUserPassword[i].password = password.value;
                // console.log(listUserPassword[i]);
                localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword))

                loginStatus[0].password = password.value;
                localStorage.setItem('loginStatus', JSON.stringify(loginStatus))


                current_password.value = "";
                password.value = "";
                re_password.value = "";

                console.log('Thay đổi mật khẩu thành công');
                showAlertPopup();
                let popup_detail = document.querySelector('#pop_up_alert--detail p')
                popup_detail.innerHTML = `Thay đổi mật khẩu thành công`
                setTimeout(hideAlertPopup, 1000)
                return true;
            }
        }
    }
    else {
        showAlertPopup();
        let popup_detail = document.querySelector('#pop_up_alert--detail p')
        popup_detail.innerHTML = `Thông tin không trùng khớp, vui lòng thử lại`
        setTimeout(hideAlertPopup, 1000)
        return false;
    }
}














