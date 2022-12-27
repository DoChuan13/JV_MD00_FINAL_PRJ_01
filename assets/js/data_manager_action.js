//Select course
let courseDetail = document.querySelectorAll('.content_course--detail_btn');
for (let i = 0; i < courseDetail.length; i++) {
    courseDetail[i].addEventListener('click', function () {
        renderDetailContent(i)
    })
}

// Render Detail Content
function renderDetailContent(index) {
    let result = document.querySelector('.list_subject_table');
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let data = ``;

    if (courseDataList[index].course_detail.length != 0) {
        for (let i = 0; i < courseDataList[index].course_detail.length; i++) {
            data += `
                    <tr>
                        <td>${courseDataList[index].course_detail[i].sub}</td>
                        <td>${courseDataList[index].course_detail[i].title}</td>
                        <td>
                            <button type="button" class="edit_content_${courseDataList[index].course_detail[i].sub} btn_main group_1" onclick="editContent(${index}, ${courseDataList[index].course_detail[i].sub})">Sửa</button>
                            <button type="button" class="delete_content_${courseDataList[index].course_detail[i].sub} btn_main group_2" onclick="deleteContent(${index}, ${courseDataList[index].course_detail[i].sub})">Xóa</button>
                            <button type="button" class="detail_content_${courseDataList[index].course_detail[i].sub} btn_main group_3" onclick="viewContent(${index}, ${courseDataList[index].course_detail[i].sub})">Chi tiết</button>
                        </td>
                    </tr>
                    `

        }
        data += `   </tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" class="add_content btn_main group_4" onclick="addContent(${index})">Thêm mới</button>
                            
                        </td>
                    </tr>
            `
        data += `</div>`;
    }
    else {
        data += ` </tr>
                    <td></td>
                    <td></td>
                    <td>
                        <button type="button" class="add_content btn_main group_4" onclick="addContent(${index})">Thêm mới</button>
                        
                    </td>
                </tr>
            `
    }
    result.innerHTML = data;
}
// renderDetailContent(0)

//CRUD Action
function editContent(id_course, sub) {
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let btn_act_log = document.querySelector(`.edit_content_${sub}`)
    let subj = btn_act_log.parentNode.parentNode.childNodes[1];
    let content = btn_act_log.parentNode.parentNode.childNodes[3];
    for (let i = 0; i < courseDataList[id_course].course_detail.length; i++) {
        if (sub == courseDataList[id_course].course_detail[i].sub) {
            // subj.innerHTML = `<input type="text" value="${courseDataList[id_course].course_detail[i].sub}">`
            content.innerHTML = `<input type="text" value="${courseDataList[id_course].course_detail[i].title}">`
        }
    }
    btn_act_log.setAttribute('onclick', `saveContent(${id_course}, ${sub})`)
    btn_act_log.innerHTML = `Lưu`
}

function saveContent(id_course, sub) {
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let btn_act_log = document.querySelector(`.edit_content_${sub}`)
    let tittledata = btn_act_log.parentNode.parentNode.childNodes[3].childNodes[0];


    let title = tittledata.value;

    for (let i = 0; i < courseDataList[id_course].course_detail.length; i++) {
        if (sub == courseDataList[id_course].course_detail[i].sub) {
            courseDataList[id_course].course_detail[i].title = title;
        }
    }
    localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
    tittledata.parentNode.innerHTML = title;

    btn_act_log.setAttribute('onclick', `editContent(${id_course}, ${sub})`)
    btn_act_log.innerHTML = `Sửa`
}

function viewContent(id_course, sub) {
    alert("Nội dung đang phát triển")
}

function deleteContent(id_course, sub) {
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let btn_act_log = document.querySelector(`.delete_content_${sub}`)
    let checkconfirm = confirm("Bạn có chắc chắn muốn xóa không?")
    if (checkconfirm) {
        for (let i = 0; i < courseDataList[id_course].course_detail.length; i++) {
            if (sub == courseDataList[id_course].course_detail[i].sub) {
                // console.log(courseDataList[id_course].course_detail[i]);
                courseDataList[id_course].course_detail.splice(i, 1)
                localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
            }
        }
        renderDetailContent(id_course)
    }
}

function addContent(id_course) {
    let btn_act_log = document.querySelector('.add_content')
    let subj = btn_act_log.parentNode.parentNode.childNodes[0];
    let content = btn_act_log.parentNode.parentNode.childNodes[2]
    subj.innerHTML = `<input type="text" >`
    content.innerHTML = `<input type="text" >`
    btn_act_log.setAttribute('onclick', `saveNewContent(${id_course})`)
    btn_act_log.innerHTML = `Lưu`
}

function saveNewContent(id_course) {
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));
    let btn_act_log = document.querySelector('.add_content')

    let subj = btn_act_log.parentNode.parentNode.childNodes[0].childNodes[0];
    let content = btn_act_log.parentNode.parentNode.childNodes[2].childNodes[0];
    // console.log(subj.value);
    if (subj.value == `` || content.value == ``) {
        alert('Vui lòng nhập mã bài học, và nội dung bài học')
    }
    else if (parseInt(subj.value) <= 0) {
        alert('Mã khóa học không hợp lệ, vui lòng nhập mã khác')
    }
    else {
        if (courseDataList[id_course].course_detail.length == 0) {
            courseDataList[id_course].course_detail.push({ sub: subj.value, title: content.value })
            localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
            renderDetailContent(id_course)

        }
        else if (courseDataList[id_course].course_detail.length == 1) {
            let preValue = parseInt(courseDataList[id_course].course_detail[0].sub);
            let curValue = parseInt(subj.value);
            if (preValue < curValue) {
                courseDataList[id_course].course_detail.push({ sub: parseInt(subj.value), title: content.value })
                localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
                renderDetailContent(id_course)
            }
            else {
                courseDataList[id_course].course_detail.splice(0, 0, { sub: parseInt(subj.value), title: content.value })
                localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
                renderDetailContent(id_course)
            }
        }
        else {
            for (let i = 0; i < courseDataList[id_course].course_detail.length - 1; i++) {
                // console.log('so sánh', parseInt(courseDataList[id_course].course_detail[i].sub) < parseInt(subj.value) && parseInt(subj.value) < parseInt(courseDataList[id_course].course_detail[i + 1].sub));
                let preValue = parseInt(courseDataList[id_course].course_detail[i].sub);
                let curValue = parseInt(subj.value);
                let nextValue = parseInt(courseDataList[id_course].course_detail[i + 1].sub);
                if (preValue == curValue || curValue == nextValue) {
                    alert('Mã khóa học đã tồn tại, vui lòng nhập mã khác')
                    break;
                }
                else if (preValue > curValue) {
                    courseDataList[id_course].course_detail.splice(i, 0, { sub: parseInt(subj.value), title: content.value })
                    localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
                    renderDetailContent(id_course)
                    break;
                }
                else if ((preValue < curValue && curValue < nextValue)) {
                    // console.log(121212);
                    courseDataList[id_course].course_detail.splice(i + 1, 0, { sub: parseInt(subj.value), title: content.value })
                    localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
                    renderDetailContent(id_course)
                    break;
                }
                else if (i == courseDataList[id_course].course_detail.length - 2) {
                    courseDataList[id_course].course_detail.push({ sub: parseInt(subj.value), title: content.value })
                    localStorage.setItem('courseDataList', JSON.stringify(courseDataList));
                    renderDetailContent(id_course)
                    break;
                }
            }
        }
    }
}


// let courseDataList = JSON.parse(localStorage.getItem('courseDataList'));

// console.log(courseDataList[0].course_detail);
