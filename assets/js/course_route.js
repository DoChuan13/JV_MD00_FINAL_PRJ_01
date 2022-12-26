//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, showAlertPopup, hideAlertPopup, directToHome } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse } from "./database/db_course.js";

initLocalDB();
initCourseDB();
generateCouserBought()





//Generate Course bought)
function generateCouserBought() {
    let result = document.querySelector('.content_course_manager--detail');

    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'))
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))

    let data = '<h1 class="font_title col-xs-12 col-sm-12">Khóa học đã mua</h1>';

    for (let i = 0; i < listUserPassword.length; i++) {
        if (listUserPassword[i].email == loginStatus[0].email) {
            // console.log(listUserPassword[i].course);
            if (listUserPassword[i].course.length == 0) {
                data += `
                        <p>Bạn chưa mua khóa học nào. Click vào <a href="/pages/common_pages/course.html"><b>đây</b><a> để mua khóa học</p>
                        `
            }
            else {
                for (let j = 0; j < listUserPassword[i].course.length; j++) {
                    let purchase = new Date(listUserPassword[i].course[j].purchase)
                    let expire = new Date(listUserPassword[i].course[j].expire);

                    data += `
                            <div class="couser_bought_detail">
                                <p class="font_cap" style="display:none">Mã ID:<span>${listUserPassword[i].course[j].id}</span></p>
                                <p class="font_cap">Khóa học: ${listUserPassword[i].course[j].course}</p>
                                <p class="font_bd2">Renew: ${listUserPassword[i].course[j].renew}</p>
                                <p class="font_bd2">Ngày mua: ${purchase.getDate()}/${purchase.getMonth() + 1}/${purchase.getFullYear()}</p>
                                <p class="font_bd2">Hết hạn: ${expire.getDate()}/${expire.getMonth() + 1}/${expire.getFullYear()}</p>
                                <p class="font_bd2">Thời gian còn lại: ${parseInt((expire - purchase) / 86400000)}</p>
                                <div class="action_btn_group">
                                    <button type="button" class="content_view btn_main font_sm_btn group_2" style="width: 140px">Xem nội dung</button>
                                </div>
                            </div>
                    `
                }
            }

            break;
        }
    }


    result.innerHTML = data;
}

//Event for Detail Button click
let content_view = document.querySelectorAll('.content_view');
for (let i = 0; i < content_view.length; i++) {
    content_view[i].addEventListener('click', function () {
        let id = content_view[i].parentNode.parentNode.childNodes[1].childNodes[1].innerHTML;
        generateCouserBoughtDetail(id);
        // console.log(id);
    })
}




// generateCouserBoughtDetail(0)

//Render Detail Bought Course Contents
function generateCouserBoughtDetail(index) {
    let result = document.querySelector('.content_course_manager--detail');
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'))

    let data = `<h1 class="font_title col-xs-12 col-sm-12">Danh mục bài học khóa: ${courseDataList[index].course}</h1>`;

    if (courseDataList[index].course_detail.length == 0) {
        data += `<div>
                        Nội dung đang cập nhật vui lòng quay lại sau
                    </div>
                    `
    }
    else {
        data += `<div class="list_subject">`
        for (let i = 0; i < courseDataList[index].course_detail.length; i++) {
            data += `
            <div class="list_subject--detail hand_cursor">
                <span>Bài ${courseDataList[index].course_detail[i].sub}.</span>
                <span>${courseDataList[index].course_detail[i].title}</span>
            </div>
            `
        }
        data += `</div>`;
        data += `
                <div class="review_btn_area">
                    <textarea name="" class="review_course" placeholder="Vui lòng viết đánh giá về khóa học tại đây"></textarea>
                    <button type="button" class="btn_main group_3 font_sm_btn submit_review">Gửi đánh giá</button>
                </div>
                `
        result.style.display = `block`
    }
    result.innerHTML = data;
    callAddReviewOpt(index)

}


//Review Submit Comment Button




//Function update comment
function callAddReviewOpt(index) {
    let review_course = document.querySelector('.submit_review')
    review_course.addEventListener('click', function () {
        addReviewOpt(index)
    })
}
function addReviewOpt(index) {
    let review_course = document.querySelector('.review_course')
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    for (let i = 0; i < listUserPassword.length; i++) {
        if (loginStatus[0].email == listUserPassword[i].email) {
            listUserPassword[i].course[index].review = review_course.value;

            localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword))
            review_course.value = ''
        }
    }
}






//Check Login/Logout event
if (checkLogin() == 'user_block') {
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Tài khoản người dùng đang bị block. Vui lòng liên hệ với quản trị viên`
    setTimeout(directToHome, 2000)
}
if (checkLogin() == 'admin') {
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Để truy cập, vui lòng đăng nhập với tài khoản người dùng`
    setTimeout(directToHome, 2000)
}
else if (checkLogin() == 'none') {
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Để truy cập vui lòng liên hệ với tài khoản người dùng`
    setTimeout(directToHome, 2000)
}