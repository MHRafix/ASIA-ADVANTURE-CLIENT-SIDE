import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../logo.png";
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
    <div className={sticky ? "header_wrapper_active" : "header_wrapper"}>
      <header className="header">
        <div id="logo">
          <img src={Logo} alt="logo" className="logo_image" />
        </div>
        <nav id="navigation_bar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about_us">About Us</Link>
          <Link to="/travel_packages">Travel Packages</Link>
          <Link to="/pre_instruction">Pre Instruction</Link>
          <Link to="/contact_us">Contact Us</Link>
        </nav>
        <div id="icon_lements">
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
                <SlowMotionVideoOutlinedIcon />
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
