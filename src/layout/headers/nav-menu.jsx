import Link from "next/link";
import React, { useContext } from "react";
import menu_data from "./menu-data";
import { ThemeContext } from "@/context/ThemeContext";

const NavMenu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ul style={{ color: theme === 'dark' ? 'white' : 'black' }}>
        {menu_data.map((menu_item, i) => (
          <li key={i}>
            <Link href={menu_item.link}>
              <span style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                {menu_item.title}
              </span>
            </Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <Link href={sub_menu.link}>
                      <span style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                        {sub_menu.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
