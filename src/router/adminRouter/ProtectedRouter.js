import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import * as routerLink from "../../config/routersConfig";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";

function ProtectedRouter() {
  let navigate = useNavigate();
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    let loginStatus = checkLoginStatus();
    if (loginStatus.typeUser === "admin") {
      setPermission(true);
    } else {
      navigate(routerLink.error403.path, { replace: true });
    }
  }, [navigate]);

  return !permission ? <></> : <Outlet />;
}

export default ProtectedRouter;
