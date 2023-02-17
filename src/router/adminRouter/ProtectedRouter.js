import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import * as routerLink from "../../config/routersConfig";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import { usersState } from "../../services/redux/selectors/selectors";

function ProtectedRouter() {
  let navigate = useNavigate();
  let usState = useSelector(usersState);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (usState.length !== 0) {
      let loginStatus = checkLoginStatus();
      let flag = false;
      usState.forEach((user) => {
        if (
          loginStatus.typeUser === "admin" &&
          loginStatus.email === user.email &&
          user.statusUser
        ) {
          flag = true;
        }
      });
      if (flag) {
        setPermission(true);
      } else {
        navigate(routerLink.error403.path, { replace: true });
      }
    }
  }, [usState, navigate]);

  return !permission ? <></> : <Outlet />;
}

export default ProtectedRouter;
