import React from "react";
import "../components/styles/SidebarItem.css";

const SidebarItem = ({ title }) => {
  return (
    <div className="sidebarItem">
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarItem;
