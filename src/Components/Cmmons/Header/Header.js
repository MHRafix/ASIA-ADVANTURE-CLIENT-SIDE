import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../logo.png";
import { header_main_menus, MenuLink } from "../data/navigation_data";
export const Header = () => {
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
  return (
    <div className={sticky ? "header_wrapper_sticky" : "header_wrapper"}>
      <header className="header">
        <div id="logo">
          <img src={Logo} alt="logo" className="logo_image" />
        </div>
        <nav id="navigation_bar">
          {header_main_menus.map((menu) => (
            <MenuLink key={menu.uid} menu={menu} />
          ))}
        </nav>
        <div id="icon_elements">
          <ul>
            <li>
              <span id="cart_badge">0</span>
              <span className="nav_icon">
                <ShoppingCartOutlinedIcon />
              </span>
            </li>
            <li>
              <span className="nav_icon">
                <Link style={{ color: "#000" }} to="/my_account">
                  <AccountCircleOutlinedIcon />
                </Link>
              </span>
            </li>
            <li>
              <span className="nav_icon">
                <PlayCircleFilledWhiteOutlinedIcon />
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
