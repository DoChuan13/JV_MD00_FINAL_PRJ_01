import React from "react";
import AdminLayout from "./detail/AdminLayout";
import DropMenu from "./DropMenu";

function Admin() {
  return (
    <>
      <div className="admin_drop_menu">
        <DropMenu />
      </div>
      <AdminLayout />
    </>
  );
}

export default Admin;
