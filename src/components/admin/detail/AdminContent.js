import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ManagerUserTable from "./userInfo/ManagerUserTable";
import AdminIndex from "./AdminIndex";
import * as routerLink from "../../../config/routersConfig";
import ProductGroup from "./productInfo/ProductGroup";

function AdminContent() {
  let elementContent;
  let params = useParams();

  if (params.detail === undefined) {
    elementContent = <AdminIndex />;
  } else if (
    params.detail === "user_detail" &&
    params.id >= 1 &&
    params.id <= 3
  ) {
    elementContent = <ManagerUserTable />;
  } else if (
    params.detail === "product_detail" &&
    params.id >= 1 &&
    params.id <= 4
  ) {
    elementContent = <ProductGroup />;
  } else if (params.detail === "notice" && params.id >= 1 && params.id <= 2) {
    elementContent = <></>;
  } else return <Navigate to={routerLink.error404.path} />;
  return <>{elementContent}</>;
}

export default AdminContent;
