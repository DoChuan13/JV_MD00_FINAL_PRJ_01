//Class set INT for Course

export class Course {
    constructor(id, course, level, target, cost, coursetime, subject) {
        this.id = id;
        this.course = course;
        this.level = level;
        this.target = target;
        this.cost = cost;
        this.coursetime = coursetime;
        this.subject = subject;
        this.about;
    }
    getCost = function () {
        return this.cost
    }
    setCost = function (cost) {
        this.cost = cost;
    }
}

let initCourseArray = []

initCourseArray[0] = new Course()
initCourseArray[1] = new Course()
initCourseArray[2] = new Course()
initCourseArray[3] = new Course()
initCourseArray[4] = new Course()


initCourseArray[0] = {
    id: 0,
    course: 'N5',
    level: 'Sơ cấp',
    target: 'NGƯỜI MỚI BẮT ĐẦU',
    cost: 790000,
    coursetime: 120,
    subject: 32,
    course_info: {
        //Ưu điểm
        about_00: [`Biết cách đọc, cách viết hai bảng chữ cái Hiragana, Katakana, gần 1000 từ vựng và 150 chữ Kanji sơ cấp`,
            `Nắm vững các cấu trúc ngữ pháp JLPT N5 khác nhau, áp dụng được vào nhiều tình huống trong thực tế.`,
            `Nghe, hiểu và có thể giao tiếp được tiếng Nhật trong các tình huống thường gặp trong cuộc sống,…`
        ],
        //Kanji
        about_01: [`YasashiiNihongo đã nghiên cứu và xây dựng một hệ thống học Kanji hoàn toàn mới so với các phương pháp truyền thống từ trước đến nay.`,
            `Ở khóa JLPT N5, việc học Kanji được chia làm 3 cấp độ. Ở mỗi cấp độ, bạn sẽ được học và luyện tập ngay lập tức những thông tin cơ bản của một chữ Kanji như cách ghi nhớ, ý nghĩa, âm On và âm Kun,…`
        ],
        //Từ vựng
        about_02: [`Các bài học từ vựng sẽ bao gồm các từ mới bổ trợ cho bạn xuyên suốt trong buổi học, mỗi từ vựng bao gồm âm thanh, ý nghĩa, hình ảnh, đi kèm là các ví dụ thực tế và một loạt bài tập phía sau.`,
            `Đặc biệt, YasashiiNihongo đã nghiên cứu và phát triển một hình thức học từ vựng hoàn toàn mới. Việc học từ mới qua âm thanh và hình ảnh sẽ giúp bạn ghi nhớ nhanh và lâu hơn, ngoài ra còn khiến quá trình học trở nên thú vị hơn rất nhiều.`
        ],
        //Ngữ pháp
        about_03: [`Mỗi bài học ngữ pháp trình độ N5 sẽ bao gồm video do giáo viên giảng dạy, phần tóm tắt lại kiến thức trong bài và rất nhiều bài tập bổ trợ, củng cố những kiến thức đã được học.`
        ],
        //Đọc hiểu
        about_04: [`Các bài đọc hiểu trong khóa học JLPT N5 được biên soạn và sắp xếp theo mức độ khó tăng dần để giúp người học làm quen với cách hành văn trong tiếng Nhật. Ngay sau mỗi bài, người học sẽ trả lời các câu hỏi mang tính tổng hợp để kiểm tra lại mức độ hiểu biết về nội dung của đoạn văn, đoạn hội thoại đó.`,
            `Đặc biệt, bạn có thể tra từ mới trực tiếp ngay trong bài đọc mà không cần phải sử dụng từ điển hỗ trợ.`
        ],
        //Nghe hiểu
        about_05: [`Khóa học JLPT N5 của YasashiiNihongo bao gồm rất nhiều bài tập nghe hiểu với hệ thống dạng học đa dạng, trực quan và sinh động.`,
            `Trong mỗi buổi học, người nghe sẽ được tiếp xúc với những cuộc hội thoại trong các chủ đề thường ngày, được rèn luyện cách nắm bắt thông tin khi đối thoại bằng tiếng Nhật.`
        ]
    },
    special_info: [`Cuối cùng, tất cả những kỹ năng bạn được học phía trên sẽ phục vụ cho bài kiểm tra kiến thức nhỏ ngay phía sau mỗi buổi học. Bài kiểm tra này sẽ tổng hợp lại tất cả những nội dung bạn đã được học, giúp củng cố lại và ghi nhớ kiến thức một cách lâu dài hơn.`]
}

initCourseArray[1] = {
    id: 1,
    course: 'N4',
    level: 'Sơ cấp',
    target: 'SINH VIÊN, NGƯỜI ĐI LÀM, DU HỌC SINH',
    cost: 890000,
    coursetime: 120,
    subject: 25,
    course_info: {
        //Ưu điểm
        about_00: [`Học và nắm được gần 1000 từ vựng và 200 chữ Kanji thường dùng.`,
            `Nắm vững các cấu trúc ngữ pháp JLPT N4 khác nhau, áp dụng được vào nhiều tình huống trong thực tế.`,
            `Nghe, hiểu và có thể giao tiếp được tiếng Nhật trong các tình huống thường gặp trong cuộc sống,…`
        ],
        //Kanji
        about_01: [`YasashiiNihongo đã nghiên cứu và xây dựng một hệ thống học Kanji hoàn toàn mới so với các phương pháp truyền thống từ trước đến nay.`,
            `Ở khóa JLPT N4, việc học Kanji được chia làm 3 cấp độ. Ở mỗi cấp độ, bạn sẽ được học và luyện tập ngay lập tức những thông tin cơ bản của một chữ Kanji như cách ghi nhớ, ý nghĩa, âm On và âm Kun,…`
        ],
        //Từ vựng
        about_02: [`Các bài học từ vựng sẽ bao gồm các từ mới bổ trợ cho bạn xuyên suốt trong buổi học, mỗi từ vựng bao gồm âm thanh, ý nghĩa, hình ảnh, đi kèm là các ví dụ thực tế và một loạt bài tập phía sau.`,
            `Đặc biệt, YasashiiNihongo đã nghiên cứu và phát triển một hình thức học từ vựng hoàn toàn mới. Việc học từ mới qua âm thanh và hình ảnh sẽ giúp bạn ghi nhớ nhanh và lâu hơn, ngoài ra còn khiến quá trình học trở nên thú vị hơn rất nhiều.`
        ],
        //Ngữ pháp
        about_03: [`Mỗi bài học ngữ pháp trình độ N4 sẽ bao gồm video do giáo viên giảng dạy, phần tóm tắt lại kiến thức trong bài và rất nhiều bài tập bổ trợ, củng cố những kiến thức đã được học.`
        ],
        //Đọc hiểu
        about_04: [`Các bài đọc hiểu trong khóa học JLPT N4 được biên soạn và sắp xếp theo mức độ khó tăng dần, theo sát sự tiến bộ của học viên qua mỗi buổi. Ngay sau mỗi bài, người học sẽ trả lời các câu hỏi mang tính tổng hợp để kiểm tra lại mức độ hiểu biết về nội dung của đoạn văn, đoạn hội thoại đó.`,
            `Đặc biệt, bạn có thể tra từ mới trực tiếp ngay trong bài đọc mà không cần phải sử dụng từ điển hỗ trợ.`
        ],
        //Nghe hiểu
        about_05: [`Khóa học JLPT N4 của YasashiiNihongo bao gồm rất nhiều bài tập nghe hiểu với hệ thống dạng học đa dạng, trực quan và sinh động.`,
            `Trong mỗi buổi học, người nghe sẽ được tiếp xúc với những cuộc hội thoại trong các chủ đề thường ngày, được rèn luyện cách nắm bắt thông tin khi đối thoại bằng tiếng Nhật.`
        ]
    },
    special_info: [`Cuối cùng, tất cả những kỹ năng bạn được học phía trên sẽ phục vụ cho bài kiểm tra kiến thức nhỏ ngay phía sau mỗi buổi học. Bài kiểm tra này sẽ tổng hợp lại tất cả những nội dung bạn đã được học, giúp củng cố lại và ghi nhớ kiến thức một cách lâu dài hơn.`]
}

initCourseArray[2] = {
    id: 2,
    course: 'N3',
    level: 'Trung cấp',
    target: 'SINH VIÊN, NGƯỜI ĐI LÀM',
    cost: 1190000,
    coursetime: 150,
    subject: 30,
    course_info: {
        //Ưu điểm
        about_00: [`Học và nắm được trên 1500 từ vựng và 300 chữ Kanji thuộc trình độ sơ – trung cấp.`,
            `Nắm vững các cấu trúc ngữ pháp JLPT N3 khác nhau, áp dụng được vào nhiều tình huống trong thực tế.`,
            `Nghe, hiểu và có thể giao tiếp được tiếng Nhật trong các tình huống thường gặp trong cuộc sống cũng như ở các cấp độ đòi hỏi cao hơn.`,
            `Có đủ kiến thức cần thiết để tham gia kỳ thi JLPT N3 hàng năm.`
        ],
        //Kanji
        about_01: [`YasashiiNihongo đã nghiên cứu và xây dựng một hệ thống học Kanji hoàn toàn mới so với các phương pháp truyền thống từ trước đến nay.`,
            `Ở khóa JLPT N3, việc học Kanji được chia làm 3 cấp độ. Ở mỗi cấp độ, bạn sẽ được học và luyện tập ngay lập tức những thông tin cơ bản của một chữ Kanji như cách ghi nhớ, ý nghĩa, âm On và âm Kun,…`
        ],
        //Từ vựng
        about_02: [`Các bài học từ vựng sẽ bao gồm các từ mới bổ trợ cho bạn xuyên suốt trong buổi học, mỗi từ vựng bao gồm âm thanh, ý nghĩa, hình ảnh, đi kèm là các ví dụ thực tế và một loạt bài tập phía sau.`,
            `Đặc biệt, YasashiiNihongo đã nghiên cứu và phát triển một hình thức học từ vựng hoàn toàn mới. Việc học từ mới qua âm thanh và hình ảnh sẽ giúp bạn ghi nhớ nhanh và lâu hơn, ngoài ra còn khiến quá trình học trở nên thú vị hơn rất nhiều.`
        ],
        //Ngữ pháp
        about_03: [`Mỗi bài học ngữ pháp trình độ N3 sẽ bao gồm video do giáo viên giảng dạy, phần tóm tắt lại kiến thức trong bài và rất nhiều bài tập bổ trợ, củng cố những kiến thức đã được học.`
        ],
        //Đọc hiểu
        about_04: [`Các bài đọc hiểu trong khóa học JLPT N3 được biên soạn và sắp xếp theo mức độ khó tăng dần, theo sát sự tiến bộ của học viên qua mỗi buổi. Ngay sau mỗi bài, người học sẽ trả lời các câu hỏi mang tính tổng hợp để kiểm tra lại mức độ hiểu biết về nội dung của đoạn văn, đoạn hội thoại đó.`,
            `Đặc biệt, bạn có thể tra từ mới trực tiếp ngay trong bài đọc mà không cần phải sử dụng từ điển hỗ trợ.`
        ],
        //Nghe hiểu
        about_05: [`Khóa học JLPT N3 của YasashiiNihongo bao gồm rất nhiều bài tập nghe hiểu với hệ thông dạng học đa dạng, trực quan và sinh động.`,
            `Trong mỗi buổi học, người nghe sẽ được tiếp xúc với những cuộc hội thoại trong các chủ đề thường ngày, được rèn luyện cách nắm bắt thông tin khi đối thoại bằng tiếng Nhật.`
        ]
    },
    special_info: [`Cuối cùng, tất cả những kỹ năng bạn được học phía trên sẽ phục vụ cho bài kiểm tra kiến thức nhỏ ngay phía sau mỗi buổi học. Bài kiểm tra này sẽ tổng hợp lại tất cả những nội dung bạn đã được học, giúp củng cố lại và ghi nhớ kiến thức một cách lâu dài hơn.`]
}

initCourseArray[3] = {
    id: 3,
    course: 'N2',
    level: 'Cao cấp',
    target: 'SINH VIÊN, NGƯỜI ĐI LÀM',
    cost: 1590000,
    coursetime: 180,
    subject: 36,
    course_info: {
        //Ưu điểm
        about_00: [`Học và nắm được trên 2000 từ vựng và 400 chữ Kanji thuộc trình nâng cao.`,
            `Nắm vững các cấu trúc ngữ pháp JLPT N2 khác nhau, áp dụng được vào nhiều tình huống trong thực tế.`,
            `Nghe, hiểu và có thể giao tiếp được tiếng Nhật trong các tình huống thường gặp trong cuộc sống cũng như ở các cấp độ đòi hỏi cao hơn.`,
            `Có đủ kiến thức cần thiết để tham gia kỳ thi JLPT N2 hàng năm.`
        ],
        //Kanji
        about_01: [`YasashiiNihongo đã nghiên cứu và xây dựng một hệ thống học Kanji hoàn toàn mới so với các phương pháp truyền thống từ trước đến nay.`,
            `Ở khóa JLPT N2, việc học Kanji được chia làm 3 cấp độ. Ở mỗi cấp độ, bạn sẽ được học và luyện tập ngay lập tức những thông tin cơ bản của một chữ Kanji như cách ghi nhớ, ý nghĩa, âm On và âm Kun,…`
        ],
        //Từ vựng
        about_02: [`Các bài học từ vựng sẽ bao gồm các từ mới bổ trợ cho bạn xuyên suốt trong buổi học, mỗi từ vựng bao gồm âm thanh, ý nghĩa, hình ảnh, đi kèm là các ví dụ thực tế và một loạt bài tập phía sau.`,
            `Đặc biệt, YasashiiNihongo đã nghiên cứu và phát triển một hình thức học từ vựng hoàn toàn mới. Việc học từ mới qua âm thanh và hình ảnh sẽ giúp bạn ghi nhớ nhanh và lâu hơn, ngoài ra còn khiến quá trình học trở nên thú vị hơn rất nhiều.`
        ],
        //Ngữ pháp
        about_03: [`Mỗi bài học ngữ pháp trình độ N2 sẽ bao gồm video do giáo viên giảng dạy, phần tóm tắt lại kiến thức trong bài và rất nhiều bài tập bổ trợ, củng cố những kiến thức đã được học.`
        ],
        //Đọc hiểu
        about_04: [`Các bài đọc hiểu trong khóa học JLPT N3 được biên soạn và sắp xếp theo mức độ khó tăng dần, theo sát sự tiến bộ của học viên qua mỗi buổi. Ngay sau mỗi bài, người học sẽ trả lời các câu hỏi mang tính tổng hợp để kiểm tra lại mức độ hiểu biết về nội dung của đoạn văn, đoạn hội thoại đó.`,
            `Đặc biệt, bạn có thể tra từ mới trực tiếp ngay trong bài đọc mà không cần phải sử dụng từ điển hỗ trợ.`
        ],
        //Nghe hiểu
        about_05: [`Khóa học JLPT N3 của YasashiiNihongo bao gồm rất nhiều bài tập nghe hiểu với hệ thông dạng học đa dạng, trực quan và sinh động.`,
            `Trong mỗi buổi học, người nghe sẽ được tiếp xúc với những cuộc hội thoại trong các chủ đề thường ngày, được rèn luyện cách nắm bắt thông tin khi đối thoại bằng tiếng Nhật.`
        ]
    },
    special_info: [`Cuối cùng, tất cả những kỹ năng bạn được học phía trên sẽ phục vụ cho bài kiểm tra kiến thức nhỏ ngay phía sau mỗi buổi học. Bài kiểm tra này sẽ tổng hợp lại tất cả những nội dung bạn đã được học, giúp củng cố lại và ghi nhớ kiến thức một cách lâu dài hơn.`]
}

initCourseArray[4] = {
    id: 4,
    course: 'N1',
    level: 'Chuyên gia',
    target: 'SINH VIÊN, NGƯỜI ĐI LÀM',
    cost: 1190000,
    coursetime: 200,
    subject: 30,
    course_info: {
        //Ưu điểm
        about_00: [`Học và nắm được trên 3000 từ vựng và 500 chữ Kanji thuộc trình độ chuyên gia.`,
            `Nắm vững các cấu trúc ngữ pháp JLPT N1 khác nhau, áp dụng được vào nhiều tình huống trong thực tế.`,
            `Nghe, hiểu và có thể giao tiếp được tiếng Nhật trong các tình huống thường gặp trong cuộc sống cũng như ở các cấp độ đòi hỏi cao hơn.`,
            `Có đủ kiến thức cần thiết để tham gia kỳ thi JLPT N1 hàng năm.`
        ],
        //Kanji
        about_01: [`YasashiiNihongo đã nghiên cứu và xây dựng một hệ thống học Kanji hoàn toàn mới so với các phương pháp truyền thống từ trước đến nay.`,
            `Ở khóa JLPT N1, việc học Kanji được chia làm 3 cấp độ. Ở mỗi cấp độ, bạn sẽ được học và luyện tập ngay lập tức những thông tin cơ bản của một chữ Kanji như cách ghi nhớ, ý nghĩa, âm On và âm Kun,…`
        ],
        //Từ vựng
        about_02: [`Các bài học từ vựng sẽ bao gồm các từ mới bổ trợ cho bạn xuyên suốt trong buổi học, mỗi từ vựng bao gồm âm thanh, ý nghĩa, hình ảnh, đi kèm là các ví dụ thực tế và một loạt bài tập phía sau.`,
            `Đặc biệt, YasashiiNihongo đã nghiên cứu và phát triển một hình thức học từ vựng hoàn toàn mới. Việc học từ mới qua âm thanh và hình ảnh sẽ giúp bạn ghi nhớ nhanh và lâu hơn, ngoài ra còn khiến quá trình học trở nên thú vị hơn rất nhiều.`
        ],
        //Ngữ pháp
        about_03: [`Mỗi bài học ngữ pháp trình độ N1 sẽ bao gồm video do giáo viên giảng dạy, phần tóm tắt lại kiến thức trong bài và rất nhiều bài tập bổ trợ, củng cố những kiến thức đã được học.`
        ],
        //Đọc hiểu
        about_04: [`Các bài đọc hiểu trong khóa học JLPT N1 được biên soạn và sắp xếp theo mức độ khó tăng dần, theo sát sự tiến bộ của học viên qua mỗi buổi. Ngay sau mỗi bài, người học sẽ trả lời các câu hỏi mang tính tổng hợp để kiểm tra lại mức độ hiểu biết về nội dung của đoạn văn, đoạn hội thoại đó.`,
            `Đặc biệt, bạn có thể tra từ mới trực tiếp ngay trong bài đọc mà không cần phải sử dụng từ điển hỗ trợ.`
        ],
        //Nghe hiểu
        about_05: [`Khóa học JLPT N1 của YasashiiNihongo bao gồm rất nhiều bài tập nghe hiểu với hệ thông dạng học đa dạng, trực quan và sinh động.`,
            `Trong mỗi buổi học, người nghe sẽ được tiếp xúc với những cuộc hội thoại trong các chủ đề thường ngày, được rèn luyện cách nắm bắt thông tin khi đối thoại bằng tiếng Nhật.`
        ]
    },
    special_info: [`Cuối cùng, tất cả những kỹ năng bạn được học phía trên sẽ phục vụ cho bài kiểm tra kiến thức nhỏ ngay phía sau mỗi buổi học. Bài kiểm tra này sẽ tổng hợp lại tất cả những nội dung bạn đã được học, giúp củng cố lại và ghi nhớ kiến thức một cách lâu dài hơn.`]
}

// localStorage.setItem('courseDataList', JSON.stringify(initCourseArray))



//INIT Database
export function initCourseDB() {
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'))
    if (courseDataList == null) {
        courseDataList = initCourseArray;
        localStorage.setItem('courseDataList', JSON.stringify(courseDataList))
    }
}


//INIT Render All Course
export function renderAllCourse() {
    let course_list = document.querySelector('.course_list');
    let courseDataList = JSON.parse(localStorage.getItem('courseDataList'))

    let data = '';
    for (let i = 0; i < courseDataList.length; i++) {
        data += `
                <div class="course_list--detail">
                    <div class="course_list--detail_title">
                        <h2 class="font_title color_4">${courseDataList[i].course}</h2>
                        <h2 class="font_sm_title">${courseDataList[i].level}</h2>
                    </div>
                    <div class="course_list--detail_info">
                        <p class="font_lg_content">${courseDataList[i].cost} VND</p>
                        <p class="font_lg_content">${courseDataList[i].coursetime} ngày</p>
                    </div>
                    <button type="button" class="btn_main font_btn center_align group_4 course_detail_btn">Xem chi tiết</button>
                </div>
                `
    }
    course_list.innerHTML = data;
}

//INIT Render Combor Course

export function renderComboCourse() {
    let course_list_combo = document.querySelector('.course_list_combo');
    let data = '';

    data += `
                <div class="course_list_combo--detail">
                    <div class="course_list_combo--detail__div col-xs-12 col-sm-12 col-md-12 col-lg-3">
                        <p class="font_sm_title" style="text-decoration:underline">Khóa học VIP</p>
                    </div>
                    <div class="course_list_combo--detail__div col-xs-12 col-sm-4 col-md-3 col-lg-3">
                        <p style="text-decoration: line-through;">5.290.000 VND</p>
                        <p>999.000 VND</p>
                    </div>
                    <div class="course_list_combo--detail__div col-xs-6 col-sm-4 col-md-3 col-lg-3">
                        <p>Học thoải mái</p>
                        <p>N5 đến N1</p>
                    </div>
                    <div class="course_list_combo--detail__div col-xs-6 col-sm-4 col-md-3 col-lg-3">
                        <p>Học sinh</p>
                        <p>10.000+</p>
                    </div>
                </div>
                `
    course_list_combo.innerHTML = data;
}
