import React from "react";
import { Outlet } from "react-router-dom";
import User from "../../../components/user/User";

function UserPage() {
  return (
    <>
      <User />
      <Outlet />
    </>
  );
}

export default UserPage;
