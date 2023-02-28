//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, showAlertPopup, hideAlertPopup, directToHome } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse } from "./database/db_course.js";

initLocalDB();
initCourseDB();
// renderAllCourse();

if (checkLogin() != 'admin') {
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Vui lòng đăng nhập bằng tài khoản quản trị`
    setTimeout(directToHome, 1000);
}