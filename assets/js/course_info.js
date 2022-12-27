//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, showAlertPopup, hideAlertPopup } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse } from "./database/db_course.js";

initLocalDB();
initCourseDB();
renderAllCourse();
renderComboCourse();

let tokkenCourseInfo = JSON.parse(localStorage.getItem('tokkenCourseInfo'));
if (tokkenCourseInfo.length != 0) {
    // let tokkenCourseInfo = JSON.parse(localStorage.getItem('tokkenCourseInfo'));
    let index_value = tokkenCourseInfo[0].id;
    renderDetailCourse(index_value);
    generateEventBtn();
    tokkenCourseInfo = []
    localStorage.setItem('tokkenCourseInfo', JSON.stringify(tokkenCourseInfo))
}
else {
    renderAllCourse();
    renderComboCourse();
};


// renderDetailCourse(0)



//Render Detail Course
function renderDetailCourse(index) {
    let removed_element = document.querySelectorAll('.content_main--advantage_group');
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));


    let result = document.querySelector('.content_main--detail_course--info');
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let btn_group, user_option, course_info_group, course_info, about, review;
    btn_group = ``;
    user_option = ``;
    course_info = ``;
    about = ``;
    review = ``;
    //render group select button
    btn_group += `
                <div class="content_main--detail_course--info_01">
                    <div class="course--detail_btn">
                        <p class="font_ds3 xs-sm-title">Danh sách khóa học</p>
                        <ul class="content_main--detail_course--info_01__list_select">
                            <li class="content_course--detail_btn col-xs-2 col-sm-2 col-md-2 group_4 hand_cursor">N5</li>
                            <li class="content_course--detail_btn col-xs-2 col-sm-2 col-md-2 group_4 hand_cursor">N4</li>
                            <li class="content_course--detail_btn col-xs-2 col-sm-2 col-md-2 group_4 hand_cursor">N3</li>
                            <li class="content_course--detail_btn col-xs-2 col-sm-2 col-md-2 group_4 hand_cursor">N2</li>
                            <li class="content_course--detail_btn col-xs-2 col-sm-2 col-md-2 group_4 hand_cursor">N1</li>
                        </ul>
                    </div>
                </div>
                `;
    //render course info
    course_info += `
                <div class="paragraph-md">
                    <h2 class="font_title font_sm_title line-weight-lg">Khóa học tiếng Nhật ${courseDataList[index].course}</h2>
                    <table>
                        <tr>
                            <td class="font_label tb-width-200">Số buổi:</td>
                            <td class="font_label">${courseDataList[index].subject} BUỔI</td>
                        </tr>
                        <tr>
                            <td class="font_label">Thời gian:</td>
                            <td class="font_label">${courseDataList[index].coursetime} NGÀY</td>
                        </tr>
                        <tr>
                            <td class="font_label">Đối tượng:</td>
                            <td class="font_label">${courseDataList[index].target}</td>
                        </tr>
                        <tr>
                            <td class="font_label">Học phí:</td>
                            <td class="font_label">${courseDataList[index].cost} VND</td>
                        </tr>
                    </table>
                </div>
                `;

    //render user option button
    user_option += `
                    <div class="content_course_option">
                        <button class="style_button font_btn" type="button" id="buy_course">Mua khóa học</button>
                        <button class="style_button font_btn" type="button" id="try_course">Học thử</button>
                    </div>
                `

    //render detail about info
    about += `<div>`
    for (let i = 0; i < courseDataList[index].course_info.length; i++) {
        about += `<div class="content_main--detail_course--intro">
                    <p class="font_cap line-weight-lg paragraph-md">${courseDataList[index].course_info[i].info}</p>`
        for (let j = 0; j < courseDataList[index].course_info[i].desc.length; j++) {
            about += `<p class="font_bd2 text-indent text-align-justify paragraph-md" > ${courseDataList[index].course_info[i].desc[j]}</p>`
        }
        about += `</div>`
    }

    about += `</div`;


    //Render review info
    review += `
                <div class="paragraph-md">
                    <hr>
                    <h2 class="font_title font_sm_title line-weight-lg">Đánh giá từ các học viên</h2>`
    let count = 0;
    for (let i = 0; i < listUserPassword.length; i++) {
        for (let j = 0; j < listUserPassword[i].course.length; j++) {
            if (listUserPassword[i].course[j].id == index) {
                // console.log(listUserPassword[i].course);
                let reviewCourseValue = listUserPassword[i].course[j];
                if (reviewCourseValue != '' && reviewCourseValue != null && reviewCourseValue != undefined) {
                    let user = listUserPassword[i].first_name;
                    let reviewValue = listUserPassword[i].course[j].review;
                    if (reviewValue != '' && reviewValue != null && reviewValue != undefined) {

                        review += `<div class="review_render">
                                <p class="user_review">${user}</p>
                                <p class="user_value">${reviewValue}<p>
                            </div>
                            `
                        count++;
                    }
                }

            }
        }
    }
    if (count == 0) {
        review += `
                <div class="review_render">
                    <p class="user_value">Chưa có đánh giá về khóa học này</p>
                <div>`
    }

    review += `</div>`


    //compare all info
    course_info_group = `<div class="content_main--detail_course--info_02">` + course_info + user_option + about + review + `</div>`




    result.innerHTML = btn_group + course_info_group;
    result.style.display = 'block';
    //Remove no need element
    for (let i = 0; i < removed_element.length; i++) {
        removed_element[i].remove();
    }
}




//Generate Event button for detail course button (default website)
function generateEventBtn() {
    let event_btn = document.querySelectorAll('.content_course--detail_btn');
    for (let i = 0; i < event_btn.length; i++) {
        event_btn[i].addEventListener('click', () => {
            renderDetailCourse(i);
            generateEventBtn();
            generateEventBuyBtn(i);
        })
    }
}



//Generate Event button when click detail button
let detail_course_event = document.querySelectorAll('.detail_course_ev_btn');
// console.log(detail_course_event != null);
if (detail_course_event) {
    for (let i = 0; i < detail_course_event.length; i++) {
        detail_course_event[i].addEventListener('click', () => {
            renderDetailCourse(i);
            generateEventBtn();
            generateEventBuyBtn(i);
        })
    }
}


//Buy course button event
function generateEventBuyBtn(index) {
    let buy_course = document.querySelector('#buy_course');
    buy_course.addEventListener('click', function () {
        if (checkLogin() == 'user_block') {
            showAlertPopup();
            let popup_detail = document.querySelector('#pop_up_alert--detail p')
            popup_detail.innerHTML = `Tài khoản người dùng đang bị block. Vui lòng liên hệ với quản trị viên`
            setTimeout(hideAlertPopup, 1000);
        }
        else if (checkLogin() == 'user') {
            let courseDataList = JSON.parse(localStorage.getItem('courseDataList'))
            for (let i = 0; i < courseDataList.length; i++) {
                if (courseDataList[i].id == index) {
                    let buyOrder = [
                        {
                            id: index,
                            course: courseDataList[i].course
                        }]
                    localStorage.setItem('buyOderPending', JSON.stringify(buyOrder))
                    window.location.href = '/pages/common_pages/buy_course.html'
                    break;
                }
            }
        }
        else {
            showAlertPopup();
            let popup_detail = document.querySelector('#pop_up_alert--detail p')
            popup_detail.innerHTML = `Vui lòng đăng nhập bằng tài khoản người dùng`
            setTimeout(hideAlertPopup, 1000);
        }
    })
}
