import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ManagerProductTable from "./ManagerProductTable";
import PurchasedManager from "./PurchasedManager";
import * as routerLink from "../../../../config/routersConfig";

function ProductGroup() {
  let params = useParams();

  if (params.detail === "product_detail") {
    if (params.id === "1" || params.id === undefined) {
      return <ManagerProductTable />;
    } else if (params.id === "2" || params.id === "3" || params.id === "4") {
      return <PurchasedManager />;
    } else <Navigate to={routerLink.error404.path} />;
  }
}

export default ProductGroup;
