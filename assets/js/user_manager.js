//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, showAlertPopup, hideAlertPopup } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse } from "./database/db_course.js";

initLocalDB();
initCourseDB();
renderUserTableList();

//Render User Table List
if (checkLogin() == 'admin') {
    function renderUserTableList() {
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        let result = document.querySelector('.user_table_list')

        let data = ``;
        for (let i = 0; i < listUserPassword.length; i++) {
            data += `
                <tr>
                    <td class="font_sm admin_id">${listUserPassword[i].id}</td>
                    <td class="font_sm admin_lastname">${listUserPassword[i].last_name}</td>
                    <td class="font_sm admin_firstname">${listUserPassword[i].first_name}</td>
                    <td class="font_sm admin_mobile">${listUserPassword[i].phone}</td>
                    <td class="font_sm admin_dateofbirtd">${listUserPassword[i].dateofbirth}</td>
                    <td class="font_sm admin_gender">${listUserPassword[i].gender}</td>
                    <td class="font_sm admin_email">${listUserPassword[i].email}</td>
                    <td class="font_sm admin_email">${listUserPassword[i].status}</td>
                    <td class="font_sm deleteUser"><button type="button" class="btn_main group_2">Xóa</button></td>
                    <td class="font_sm blockUser"><button type="button" class="btn_main group_1">Block/Unblock</button></td>
                </tr>
        `
        }
        result.innerHTML = data;
        resetButtonEvent()
    }

    //Manager User
    // Delete/Block User from Database

    function resetButtonEvent() {
        let delete_btn = document.querySelectorAll('.deleteUser');
        let block_btn = document.querySelectorAll('.blockUser');

        if (delete_btn != null && block_btn != null) {
            for (let i = 0; i < delete_btn.length; i++) {
                delete_btn[i].addEventListener('click', function () {
                    let id = this.parentNode.childNodes[1].innerHTML;
                    let checkconfirm = confirm("Bạn có chắc muốn xóa tài khoản này không?")
                    if (checkconfirm) {
                        deleteUser(id)
                    }
                })
                block_btn[i].addEventListener('click', function () {
                    let id = this.parentNode.childNodes[1].innerHTML;
                    let checkconfirm = confirm("Bạn có chắc muốn chặn/bỏ chặn tài khoản này không?")
                    if (checkconfirm) {
                        blockUser(id)
                    }
                })
            }
        }
    }


    //Delete User
    function deleteUser(index) {
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        for (let i = 0; i < listUserPassword.length; i++) {
            if (listUserPassword[i].id == index) {
                listUserPassword.splice(i, 1)
                break
            }
        }
        localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword));
        renderUserTableList()
    }

    //Block User
    function blockUser(index) {
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        for (let i = 0; i < listUserPassword.length; i++) {
            if (listUserPassword[i].id == index) {
                if (listUserPassword[i].status === 'Allow') {
                    console.log(listUserPassword[i].status === 'Allow');
                    listUserPassword[i].status = 'Block';
                    break
                }
                else {
                    listUserPassword[i].status = 'Allow';
                    break
                }
            }
        }
        // console.log(listUserPassword[0].status);

        localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword));
        renderUserTableList()
    }
}
else {
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Để truy cập, vui lòng đăng nhập với quyền quản tri`
    setTimeout(hideAlertPopup, 1000)
}
