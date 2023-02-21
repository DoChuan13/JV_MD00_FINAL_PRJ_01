import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ManagerUserTable from "./userInfo/ManagerUserTable";
import AdminIndex from "./AdminIndex";
import * as routerLink from "../../../config/routersConfig";
import ProductGroup from "./productInfo/ProductGroup";

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
      <ProductGroup />
    );
  return <>{elementContent}</>;
}

export default AdminContent;
