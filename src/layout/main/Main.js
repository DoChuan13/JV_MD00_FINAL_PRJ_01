import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      {/* main section start */}
      <Outlet />
      {/* main section end */}
    </main>
  );
}

export default Main;
