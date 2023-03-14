import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IMenu, IMenus } from "../../../models/IMenu";
import { MenuCategories } from "./menuCategories/MenuCategories";

export type MenuContext = {
  menus: IMenu[];
};

export const Menu = () => {
  const [menus, setMenus] = useState<IMenu[]>([]);
  return (
    <>
      <div>
        <MenuCategories menu={menus} />
      </div>
      <div>
        <Outlet context={{ menus }}></Outlet>
      </div>
    </>
  );
};
