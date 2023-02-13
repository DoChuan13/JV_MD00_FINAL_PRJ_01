import React from "react";
import { Outlet } from "react-router-dom";

import Index from "../../../components/index/Index";

function IndexPage() {
  return (
    <>
      <Index />
      <Outlet />
    </>
  );
}

export default IndexPage;
