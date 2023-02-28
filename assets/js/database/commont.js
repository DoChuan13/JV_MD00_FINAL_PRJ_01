//Class set INT
export default function reportError() {
    console.log(("%cKhông tìm thấy thuộc tính cần tìm", 'color: red'))
}


export class UserInfo {
    constructor(id, first_name, last_name, phone, email, password) {
        this.id = id;
        this.status = 'Allow';
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = 'Khác';
        this.phone = phone;
        this.dateofbirth = '1990-01-01'
        this.email = email;
        this.password = password;
        this.course = [];
    }
    getEmail = function () {
        return this.email;
    }
    setEmail = function (email) {
        this.email = email;
    }
    getPayment = function () {
        return this.payment;
    }
    setStatus = function (status) {
        this.status = status;
    }
}


//Direction to index.html
export function directToHome() {
    window.location.href = '/index.html'
}


//Show Alert Pop-up
export function showAlertPopup() {
    let popup = document.querySelector('#pop_up_alert')
    // let popup_detail = document.querySelector('#pop_up_alert--detail p')

    popup.style.display = 'flex';
}


//Hide Alert Pop-up
export function hideAlertPopup() {
    let popup = document.querySelector('#pop_up_alert')
    popup.style.display = 'none';
}



//Int generate values
// INI Array/LocalStorage
export function initLocalDB() {
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    if (loginStatus == null) {
        loginStatus = [];
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus))
    }

    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    if (listUserPassword == null) {
        listUserPassword = [];
        localStorage.setItem('listUserPassword', JSON.stringify(listUserPassword));
    }
    //Generate admin account
    let adminAcount = JSON.parse(localStorage.getItem('adminAcount'));
    if (adminAcount == null) {
        adminAcount = [{ user: 'admin', password: 'admin' }];
        localStorage.setItem('adminAcount', JSON.stringify(adminAcount));
    }

    //Generate reset_password key
    let resetPassCode = JSON.parse(localStorage.getItem('resetPassCode'));
    if (resetPassCode == null) {
        resetPassCode = []
        localStorage.setItem('resetPassCode', JSON.stringify(resetPassCode));

    }
    //Token couse key
    let tokkenCourseInfo = JSON.parse(localStorage.getItem('tokkenCourseInfo'));
    if (tokkenCourseInfo == null) {
        tokkenCourseInfo = [];
        localStorage.setItem('tokkenCourseInfo', JSON.stringify(tokkenCourseInfo));

    }

    //Active Course Code
    let listActiveCourseKey = JSON.parse(localStorage.getItem('listActiveCourseKey'))
    if (listActiveCourseKey == null) {
        listActiveCourseKey = courseCode;
        localStorage.setItem('listActiveCourseKey', JSON.stringify(listActiveCourseKey))
    }







    //Common Function
    if (checkLogin() == 'user_block') {
        console.log('%cTài khoản người dùng đã bị block', 'color: red');
    }
    else {
        if (checkLogin() == 'user') {
            console.log('%cTài khoản người dùng', 'color: green');
            rederLoginUI()
        }
        else if (checkLogin() == 'admin') {
            console.log('%cTài khoản quản trị viên', 'color: yellow');
            rederLoginUI()
        }
    }

    //Show menubar mobile
    let navbar_hidden = document.querySelector('.header--bar_hidden_list');
    if (navbar_hidden != null) {
        let navbar_hidden = document.querySelector('.header--bar_hidden_list');
        navbar_hidden.addEventListener('click', function () {
            this.parentNode.childNodes[3].classList.toggle('header--navbar_hidden');
        })
    }

    //Show menubar PC
    let navbar_hidden_user = document.querySelector('.header--user--signin');
    if (checkLogin() != 'none' && navbar_hidden_user != null) {
        let navbar_hidden_user = document.querySelector('.header--user--signin');
        navbar_hidden_user.addEventListener('click', function () {
            let location = this.childNodes[3];
            location.classList.toggle('md_visible');
        })
    }

    //Resize windows (hide navbar)
    window.addEventListener("resize", function () {
        let color_hidden_menu = this.document.querySelector('.header--user--opt_inf');
        let navbar_hidden = document.querySelector('.header--bar_hidden_list');
        let navbar_hidden_user = document.querySelector('.header--user--signin');
        console.log(navbar_hidden_user);
        if (navbar_hidden != null && window.innerWidth >= 768) {
            let check01 = navbar_hidden.childNodes[3].classList.contains('header--navbar_hidden');
            if (check01 != true) {
                navbar_hidden.parentNode.childNodes[3].classList.add('header--navbar_hidden');
                // color_hidden_menu.style.background = 'rgb(245, 211, 211)'
            }
        }
        if (navbar_hidden_user != null && window.innerWidth <= 768) {
            let check02 = navbar_hidden_user.childNodes[3].classList.contains('md_visible');
            if (check02 != true) {
                navbar_hidden_user.childNodes[3].classList.add('md_visible')
            }
        }
    })
}





export function checkLogin() {
    let adminAcount = JSON.parse(localStorage.getItem('adminAcount'));


    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));
    let flag = 'none';

    if (loginStatus.length != 0) {
        if (adminAcount[0].user == loginStatus[0].email) {
            flag = 'admin'
        }
        else {
            for (let i = 0; i < listUserPassword.length; i++) {
                if (loginStatus[0].email == listUserPassword[i].email && listUserPassword[i].status == 'Block') {
                    console.log("%cTài khoản người dùng đã bị block", "color: red");
                    flag = 'user_block';
                    break;
                }
                else if (loginStatus[0].email == listUserPassword[i].email && loginStatus[0].password == listUserPassword[i].password) {
                    console.log("%cĐăng nhập thành công", "color: lightgreen");
                    flag = 'user';
                    break;
                }
            }
        }
    }
    return flag;
}



//Render Login UI
export function rederLoginUI() {
    let location = document.querySelector('.header--user');
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    let sign_out = location;
    if (sign_out != null) {
        if (checkLogin() == 'user') {
            sign_out.innerHTML = `<div class="header--user--signin">
                                <h3 class="hand_cursor">Hello: ${loginStatus[0].first_name}</h3>
                                <ul class="header--user--opt_inf md_visible">
                                    <li><a href="/pages/user_pages/userinfo.html">Thông tin cá nhân</a></li>
                                    <li><a href="/pages/user_pages/course_route.html">Lộ trình học</a></li>
                                    <li><a href="#" id="logout_btn">Đăng xuất</a></li>
                                    <li><a href="/pages/common_pages/course.html" class="group_1">Mua khóa học</a></li>
                                </ul>
                            </div>
                        `

            // Canceled contents:<li> <a href="#" class="group_3">Nạp thẻ học</a></li>

            let logout_btn = document.getElementById("logout_btn");;
            logout_btn.addEventListener('click', logoutUser)
        }
        else if (checkLogin() == 'admin') {
            sign_out.innerHTML = `<div class="header--user--signin">
            <h3 class="hand_cursor">Hello: ${loginStatus[0].first_name}</h3>
            <ul class="header--user--opt_inf md_visible">
            <li><a href="/pages/admin_pages/user_manager.html">Quản trị người dùng</a></li>
            <li><a href="/pages/admin_pages/data_manager.html">Cơ sở dữ liệu</a></li>
            <li><a href="#" id="logout_btn">Đăng xuất</a></li>
            </ul>
            </div>
            `
            //<img src="/assets/images/icon_private.png" alt="">

            window.document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].style.background = '#A9A9A9'//linear-gradient(rgb(250, 205, 42), rgb(246, 156, 44))';
            let logout_btn = document.getElementById("logout_btn");;
            logout_btn.addEventListener('click', logoutUser)
        }
    }
}


//Logout
export function logoutUser() {
    let loginStatus = [];
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    window.location.href = '/index.html';
}



//Toggle Eye Password
export function hideshowPassWord() {
    let password = this.parentNode.childNodes[1];
    let type = (password.getAttribute("type") === "password") ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
}




//Check Email
export function checkEmail() {
    let listUserPassword = JSON.parse(localStorage.getItem('listUserPassword'));

    if (listUserPassword.length == 0) {
        return checkSubEmail()
    }
    else {
        for (let i = 0; i < listUserPassword.length; i++) {
            if (listUserPassword[i].email == email.value) {
                email.style.border = '3px solid red'
                console.log('%cEmail đang nhập ĐÃ tồn tại!!!', "color: red");
                return false;
            }
            else if (i == listUserPassword.length - 1) {
                return checkSubEmail();
            }
        }

    }
}

//Check Sub Email
export function checkSubEmail() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        console.log('%cĐịa chỉ email hợp lệ!!!', "color: lightgreen");
        email.style.border = '3px solid green'
        return true;
    }
    else {
        console.log('%cĐịa chỉ email KHÔNG hợp lệ!!!', "color: red");
        email.style.border = '3px solid red'
        return false;
    }
}

//Check First Name
export function checkFirstName() {
    if (first_name.value != '') {
        console.log(`%cFirst Name field is OK`, "color: lightgreen");
        first_name.style.border = '3px solid green';
        return true;
    }
    else {
        console.log(`%cFirst Name field can't empty`, "color: red");
        first_name.style.border = '3px solid red';
        return false;
    }
}

//Check Last Name
export function checkLastName() {
    if (last_name.value != '') {
        console.log(`%cLast Name field is OK`, 'color: lightgreen');
        last_name.style.border = '3px solid green';
        return true;
    }
    else {
        console.log(`%cLast Name field can't empty`, "color: red");
        last_name.style.border = '3px solid red';
        return false;
    }
}

//Check Mobile Phone
export function checkMobilePhone() {
    if (phone.value != '') {
        console.log(`%cPhone field is OK`, 'color: lightgreen');
        phone.style.border = '3px solid green';
        return true;
    }
    else {
        console.log(`%cPhone field can't empty`, 'color: red');
        phone.style.border = '3px solid red';
        return false;
    }
}

//Check Password
export function checkPassword() {
    let password = document.querySelector('#password');
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (password.value.match(decimal)) {
        console.log('%cPassword is OK', 'color: lightgreen');
        password.style.border = '3px solid green'
        checkRepassword()
        return true;
    }
    else {
        console.log('%c*Require a-z, A-Z, 0-9, Special char, and length 8-20', 'color: red');
        password.style.border = '3px solid red'
        checkRepassword()
        return false;
    }
}

//Check Re-password
export function checkRepassword() {
    let password = document.querySelector('#password');
    let re_password = document.querySelector('#re_password')
    if (password.value == re_password.value) {
        console.log('%cPasswords match!', 'color: lightgreen');
        re_password.style.border = '3px solid green';
        return true;
    }
    else {
        console.log('%cPasswords do NOT match!', 'color: red');
        re_password.style.border = '3px solid red';
        return false
    }
}





let courseCode = [
    {
        course: `N5`,
        code: [{
            status: true,
            value: `YASASHIN5001`
        },
        {
            status: true,
            value: `YASASHIN5002`
        },
        {
            status: true,
            value: `YASASHIN5003`
        },
        {
            status: true,
            value: `YASASHIN5004`
        },
        {
            status: true,
            value: `YASASHIN5005`
        },
        {
            status: true,
            value: `YASASHIN5006`
        },
        {
            status: true,
            value: `YASASHIN5007`
        },
        {
            status: true,
            value: `YASASHIN5008`
        },
        {
            status: true,
            value: `YASASHIN5009`
        },
        {
            status: true,
            value: `YASASHIN5010`
        },
        ]
    },
    {
        course: `N4`,
        code: [{
            status: true,
            value: `YASASHIN4001`
        },
        {
            status: true,
            value: `YASASHIN4002`
        },
        {
            status: true,
            value: `YASASHIN4003`
        },
        {
            status: true,
            value: `YASASHIN4004`
        },
        {
            status: true,
            value: `YASASHIN4005`
        },
        {
            status: true,
            value: `YASASHIN4006`
        },
        {
            status: true,
            value: `YASASHIN4007`
        },
        {
            status: true,
            value: `YASASHIN4008`
        },
        {
            status: true,
            value: `YASASHIN4009`
        },
        {
            status: true,
            value: `YASASHIN4010`
        },
        ]
    },
    {
        course: `N3`,
        code: [{
            status: true,
            value: `YASASHIN3001`
        },
        {
            status: true,
            value: `YASASHIN3002`
        },
        {
            status: true,
            value: `YASASHIN3003`
        },
        {
            status: true,
            value: `YASASHIN3004`
        },
        {
            status: true,
            value: `YASASHIN3005`
        },
        {
            status: true,
            value: `YASASHIN3006`
        },
        {
            status: true,
            value: `YASASHIN3007`
        },
        {
            status: true,
            value: `YASASHIN3008`
        },
        {
            status: true,
            value: `YASASHIN3009`
        },
        {
            status: true,
            value: `YASASHIN3010`
        },
        ]
    },
    {
        course: `N2`,
        code: [{
            status: true,
            value: `YASASHIN2001`
        },
        {
            status: true,
            value: `YASASHIN2002`
        },
        {
            status: true,
            value: `YASASHIN2003`
        },
        {
            status: true,
            value: `YASASHIN2004`
        },
        {
            status: true,
            value: `YASASHIN2005`
        },
        {
            status: true,
            value: `YASASHIN2006`
        },
        {
            status: true,
            value: `YASASHIN2007`
        },
        {
            status: true,
            value: `YASASHIN2008`
        },
        {
            status: true,
            value: `YASASHIN2009`
        },
        {
            status: true,
            value: `YASASHIN2010`
        },
        ]
    },
    {
        course: `N1`,
        code: [{
            status: true,
            value: `YASASHIN1001`
        },
        {
            status: true,
            value: `YASASHIN1002`
        },
        {
            status: true,
            value: `YASASHIN1003`
        },
        {
            status: true,
            value: `YASASHIN1004`
        },
        {
            status: true,
            value: `YASASHIN1005`
        },
        {
            status: true,
            value: `YASASHIN1006`
        },
        {
            status: true,
            value: `YASASHIN1007`
        },
        {
            status: true,
            value: `YASASHIN1008`
        },
        {
            status: true,
            value: `YASASHIN1009`
        },
        {
            status: true,
            value: `YASASHIN1010`
        },
        ]
    },
]
