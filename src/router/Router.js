import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import axios from "axios";
import * as saga from "../services/redux/actions/sagaAction";

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

  useEffect(() => {
    dispatch(saga.get_AllProdAct());
    dispatch(saga.get_AllUserAct());
  }, [dispatch]);

  return (
    <>
      {/* <Provider store={storeValue}> */}
      <Routes>
        <Route exact path={routerLink.index.path} element={<Dashboard />}>
          {/* Public Router In Dashboard*/}
          <Route exact index element={routerLink.index.page} />
          <Route
            exact
            path={routerLink.products.path}
            element={routerLink.products.page}
          />
          <Route
            exact
            path={routerLink.about.path}
            element={routerLink.about.page}
          />
          <Route
            exact
            path={routerLink.client.path}
            element={routerLink.client.page}
          />
          <Route
            exact
            path={routerLink.contact.path}
            element={routerLink.contact.page}
          />

          {/* Private Router */}
          <Route exact path={"/"} element={<PrivateRouter />}>
            <Route
              exact
              path={routerLink.user.path}
              element={routerLink.user.page}
            />
            <Route
              exact
              path={routerLink.cart.path}
              element={routerLink.cart.page}
            />
            <Route
              exact
              path={routerLink.cartDetail.path}
              element={routerLink.cartDetail.page}
            />
            <Route
              exact
              path={routerLink.favorite.path}
              element={routerLink.favorite.page}
            />
          </Route>

          {/* Error Pages */}
          <Route
            exact
            path={routerLink.error403.path}
            element={routerLink.error403.page}
          />
          <Route
            exact
            path={routerLink.error404.path}
            element={routerLink.error404.page}
          />
          <Route
            exact
            path={routerLink.error500.path}
            element={routerLink.error500.page}
          />
        </Route>

        {/* Protected Router */}
        <Route exact path={"/"} element={<ProtectedRouter />}>
          <Route
            exact
            path={routerLink.admin.path}
            element={routerLink.admin.page}
          />
          <Route
            exact
            path={routerLink.adminDetailDefault.path}
            element={routerLink.adminDetailDefault.page}
          />
          <Route
            exact
            path={routerLink.adminDetail.path}
            element={routerLink.adminDetail.page}
          />
        </Route>

        <Route
          exact
          path={routerLink.login.path}
          element={routerLink.login.page}
        />
        <Route
          exact
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
