import React from "react";
import { Outlet } from "react-router-dom";
import User from "../../../components/user/User";

function UserPage() {
  console.log("User Router Successful");
  return (
    <>
      <User />
      <Outlet />
    </>
  );
}

export default UserPage;
