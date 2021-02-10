import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Drawer = ({ active, onToggle }) => {
  return (
    <nav className={active ? "side-drawer active" : "side-drawer"}>
      <ul className={"link-items"} onClick={onToggle}>
        {SidebarData.map((item, idx) => {
          return (
            <li key={idx} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span className="link-title">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Drawer;
