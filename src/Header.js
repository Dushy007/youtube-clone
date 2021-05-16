import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <MenuIcon />
      </div>
      <div className="header__searchBar">
        <input  placeholder="Search" type="text"/>
        <SearchIcon className="header__searchButton"/>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar className="header__icon"/>
      </div>
    </div>
  );
}

export default Header;
