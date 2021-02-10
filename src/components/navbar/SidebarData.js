import React from "react";
import { MdHome, MdInfo, MdFavorite } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <MdHome className="icon" />,
    cName: "link-item",
  },
  {
    title: "About",
    path: "/about",
    icon: <MdInfo className="icon" />,
    cName: "link-item",
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: <MdFavorite className="icon" />,
    cName: "link-item",
  },
];
