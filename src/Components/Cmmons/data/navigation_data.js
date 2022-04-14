import { Link } from "react-router-dom";

/**
 * Site main header menus
 */
export const header_main_menus = [
  { uid: 1, menu_name: "home", route_link: "/" },
  { uid: 2, menu_name: "services", route_link: "/services" },
  { uid: 3, menu_name: "about us", route_link: "/about_us" },
  { uid: 4, menu_name: "travel packages", route_link: "/travel_packages" },
  { uid: 5, menu_name: "pre instructions", route_link: "/pre_instructions" },
  { uid: 6, menu_name: "contact us", route_link: "/contact_us" },
];

/**
 * Site header main menus link component here
 */
export const MenuLink = ({ menu }) => {
  // destructure the menu object data here
  const { menu_name, route_link } = menu;

  return <Link to={route_link}>{menu_name}</Link>;
};
