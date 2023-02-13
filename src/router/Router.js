import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import axios from "axios";
import * as axios from "../middleware/api/methods/methodAxios";
import * as firstload from "../services/redux/actions/firstLoadAction";
import * as resource from "../config/resourcesAxiosConfig";

//Router Link Config
import * as routerLink from "../config/routersConfig";

//Selector
// import { usersState } from "../services/redux/selectors/selectors";

//Style CSS for All Pages
import "../assets/style/main.scss";

//Pages Component and Dashboard Control for Pages with Share Layout
import Dashboard from "../pages/dashboard/Dashboard";
/*Private Router*/
import PrivateRouter from "./privateRouter/PrivateRouter";
/*Protected Router*/
import ProtectedRouter from "./adminRouter/ProtectedRouter";

function Router() {
  let dispatch = useDispatch();

  axios
    .getDatabase(resource.products, "")
    .then((res) => {
      dispatch(firstload.prFirstLoad(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });

  axios
    .getDatabase(resource.users, "")
    .then((res) => {
      dispatch(firstload.usFirstLoad(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <>
      {/* <Provider store={storeValue}> */}
      <Routes>
        <Route path={routerLink.index.path} element={<Dashboard />}>
          {/* Public Router In Dashboard*/}
          <Route index element={routerLink.index.page} />
          <Route
            path={routerLink.products.path}
            element={routerLink.products.page}
          />
          <Route path={routerLink.about.path} element={routerLink.about.page} />
          <Route
            path={routerLink.client.path}
            element={routerLink.client.page}
          />
          <Route
            path={routerLink.contact.path}
            element={routerLink.contact.page}
          />

          {/* Private Router */}
          <Route path={routerLink.user.path} element={<PrivateRouter />}>
            <Route index element={routerLink.user.page} />
          </Route>

          {/* Error Pages */}
          <Route
            path={routerLink.error403.path}
            element={routerLink.error403.page}
          />
          <Route
            path={routerLink.error404.path}
            element={routerLink.error404.page}
          />
          <Route
            path={routerLink.error500.path}
            element={routerLink.error500.page}
          />
        </Route>

        {/* Protected Router */}
        <Route path={routerLink.admin.path} element={<ProtectedRouter />}>
          <Route index element={routerLink.admin.page} />
          <Route
            path={routerLink.adminDetailDefault.path}
            element={routerLink.adminDetailDefault.page}
          />
          <Route
            path={routerLink.adminDetail.path}
            element={routerLink.adminDetail.page}
          />
        </Route>

        <Route path={routerLink.login.path} element={routerLink.login.page} />
        <Route
          path={routerLink.register.path}
          element={routerLink.register.page}
        />
        {/* <React.Suspense fallback={<>Loading.....</>}>
              <routerLink.lazy.component>
            </React.Suspense> */}
      </Routes>
      {/* </Provider> */}
    </>
  );
}

export default Router;
