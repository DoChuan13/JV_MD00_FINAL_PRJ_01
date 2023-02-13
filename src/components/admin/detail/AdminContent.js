import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ManagerProductTable from "./productInfo/ManagerProductTable";
import ManagerUserTable from "./userInfo/ManagerUserTable";
import AdminIndex from "./AdminIndex";
import * as routerLink from "../../../config/routersConfig";

function AdminContent() {
  let params = useParams();
  if (params.id < 1 || params.id > 3) {
    return <Navigate to={routerLink.error404.path} />;
  }

  let elementContent =
    params.detail === "notice" ? (
      <></>
    ) : !params.detail || params.id < 1 || params.id > 3 ? (
      <AdminIndex />
    ) : params.detail === "user_detail" ? (
      <ManagerUserTable />
    ) : (
      <ManagerProductTable />
    );
  return <>{elementContent}</>;
}

export default AdminContent;
