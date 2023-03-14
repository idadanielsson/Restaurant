import { useState } from "react";
import { Outlet } from "react-router-dom";

import { IMenu, IMenus, menus } from "../../../models/IMenu";

import { MenuCategories } from "./menuCategories/MenuCategories";

export type MenuContext = { menus: IMenus[] };

export const Menu = () => {
  const [menus, setMenus] = useState<MenuContext>();

  return (
    <>
      <div>
        <MenuCategories />
      </div>

      <div>
        <Outlet context={{ menus }}></Outlet>
      </div>
    </>
  );
};
