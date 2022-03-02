import React from "react";
import "../components/styles/SideBar.css";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarItem title="existing inventory" />
      <SidebarItem title="used inventory" />
      <SidebarItem title="trade-in" />
      <SidebarItem title="cybertruck" />
      <SidebarItem title="roadster" />
      <SidebarItem title="semi" />
      <SidebarItem title="charging" />
      <SidebarItem title="powerwall" />
      <SidebarItem title="commercial solar" />
      <SidebarItem title="test drive" />
      <SidebarItem title="find us" />
      <SidebarItem title="support" />
      <SidebarItem title="united states" />
    </div>
  );
};

export default SideBar;
