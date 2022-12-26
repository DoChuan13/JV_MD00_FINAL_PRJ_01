//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI, checkEmail, checkSubEmail, checkFirstName, checkLastName, checkMobilePhone, checkPassword, checkRepassword, hideshowPassWord, directToHome, showAlertPopup, hideAlertPopup } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

initLocalDB();

if (checkLogin() == 'user') {
    let alert_course = document.querySelector('.buy_order_alert');
    let buyOderPending = JSON.parse(localStorage.getItem('buyOderPending'));
    alert_course.innerHTML = `Vui lòng nhập mã thẻ thanh toán cho khóa học ${buyOderPending[0].course}`


    function addCourseInUser() {
        let purchaseDate = new Date();
        let expire = new Date();
        let currentDate = new Date();

        let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        let buyOderPending = JSON.parse(localStorage.getItem('buyOderPending'));
        let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));

        let id = buyOderPending[0].id;
        for (let i = 0; i < listUserPassword.length; i++) {
            if (listUserPassword[i].email == loginStatus[0].email) {
                // console.log(listUserPassword[i].course);

                if (listUserPassword[i].course.length == 0) {
                    // console.log(listUserPassword[i].course);
                    let courseValue = {
                        id: id,
                        renew: 1,
                        course: courseDataList[id].course,
                        purchase: purchaseDate,
                        expire: expire.setDate(purchaseDate.getDate() + courseDataList[id].coursetime),
                    }
                    listUserPassword[i].course.push(courseValue);
                    break;
                }
                else {
                    for (let j = 0; j < listUserPassword[i].course.length; j++) {
                        if (listUserPassword[i].course[j].course == buyOderPending[0].course) {
                            listUserPassword[i].course[j].renew += 1;
                            listUserPassword[i].course[j].expire = expire.setDate(purchaseDate.getDate() + (courseDataList[id].coursetime) * (listUserPassword[i].course[j].renew));
                            // console.log(listUserPassword[i].course[j].expire.getDate());
                            break;
                        }
                        else if (j == listUserPassword[i].course.length - 1) {
                            let courseValue = {
                                id: id,
                                renew: 1,
                                course: courseDataList[id].course,
                                purchase: purchaseDate,
                                expire: expire.setDate(purchaseDate.getDate() + courseDataList[id].coursetime),
                            }
                            listUserPassword[i].course.push(courseValue)
                            break;
                        }
                    }
                }
            }
        }
        // console.log(listUserPassword[i].course);
        localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword))
        buyOderPending = [];
        localStorage.setItem('buyOderPending', JSON.stringify(buyOderPending));
    }


    //Check Key Code
    let confirmBuy = document.querySelector("#buy_btn");
    confirmBuy.addEventListener('click', buyCourse)
    function buyCourse() {
        let checkcode = document.querySelector('#card_code');
        let listActiveCourseKey = JSON.parse(localStorage.getItem('listActiveCourseKey'));
        let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
        let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))

        let flag = 'false'

        for (let index = 0; index < listUserPassword.length; index++) {
            if (listUserPassword[index].email == loginStatus[0].email) {
                for (let i = 0; i < listActiveCourseKey.length; i++) {
                    if (buyOderPending[0].course == listActiveCourseKey[i].course) {
                        for (let j = 0; j < listActiveCourseKey[i].code.length; j++) {
                            if (listActiveCourseKey[i].code[j].value == checkcode.value) {
                                if (listActiveCourseKey[i].code[j].status) {
                                    addCourseInUser();

                                    listActiveCourseKey[i].code[j].status = false;
                                    localStorage.setItem('listActiveCourseKey', JSON.stringify(listActiveCourseKey));
                                    console.log('%cMã thẻ hợp hợp lệ, thanh toán thành công', 'color: green');
                                    showAlertPopup();
                                    let popup_detail = document.querySelector('#pop_up_alert--detail p')
                                    popup_detail.innerHTML = `Khóa học đã được thanh toán thành công`
                                    flag = 'success'
                                    setTimeout(directToHome, 2000)
                                    break;
                                }
                                else {
                                    console.log('%cMã thẻ ĐÃ được sử dụng, vui lòng thử lại mã khác', 'color: red');
                                    showAlertPopup();
                                    let popup_detail = document.querySelector('#pop_up_alert--detail p')
                                    popup_detail.innerHTML = `Mã thẻ đã được sử dụng, vui lòng thử lại mã khác`
                                    setTimeout(hideAlertPopup, 1000)
                                    break;
                                }
                                // console.log(listActiveCourseKey[i].code[j]);
                            }
                            else if (j == listActiveCourseKey[i].code.length - 1) {
                                console.log('%cMã thẻ không hợp lệ, vui lòng thử lại mã khác', 'color: red');
                                showAlertPopup();
                                let popup_detail = document.querySelector('#pop_up_alert--detail p')
                                popup_detail.innerHTML = `Mã thẻ không hợp lệ, vui lòng thử lại mã khác`
                                setTimeout(hideAlertPopup, 1000)
                                break;
                            }
                        }
                    }
                }
            }
        }
        return flag;
    }
}
else {
    console.log("Vui lòng đăng nhập trước");
    showAlertPopup();
    let popup_detail = document.querySelector('#pop_up_alert--detail p')
    popup_detail.innerHTML = `Vui lòng đăng nhập trước`
    setTimeout(directToHome, 1500);

}
