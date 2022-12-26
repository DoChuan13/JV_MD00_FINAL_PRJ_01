//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse, } from "./database/db_course.js";

initLocalDB();
renderAllCourse();
renderComboCourse();


//Generate Event button for detail course

let detail_course_event = document.querySelectorAll('.detail_course_ev_btn');
for (let i = 0; i < detail_course_event.length; i++) {
    detail_course_event[i].addEventListener('click', () => {
        let tokkenCourseInfo = JSON.parse(localStorage.getItem('tokkenCourseInfo'));
        tokkenCourseInfo = [{ id: i }];
        localStorage.setItem('tokkenCourseInfo', JSON.stringify(tokkenCourseInfo));
        window.location.href = '/pages/common_pages/course.html'
    })
}
if (checkLogin() == 'user_block')
    showAlertPopup();
let popup_detail = document.querySelector('#pop_up_alert--detail p')
popup_detail.innerHTML = `Tài khoản người dùng đang bị block. Vui lòng liên hệ với ban quản trị, hoặc sử dụng tài khoản khác`
setTimeout(hideAlertPopup, 1000)





