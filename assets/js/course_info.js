//Class set INT
import { initLocalDB, checkLogin, logoutUser, rederLoginUI } from "./database/commont.js";
import { UserInfo } from "./database/commont.js";

import { initCourseDB, renderAllCourse, renderComboCourse } from "./database/db_course.js";

initLocalDB();
initCourseDB();
renderAllCourse();
renderComboCourse();








{/* <div class="course_list">
*/}