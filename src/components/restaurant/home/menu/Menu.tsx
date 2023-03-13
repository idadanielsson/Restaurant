import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { IMenu, IMenus, menus } from "../../../../models/IMenu";
import { Category } from "./Category";

export const MenuContext = createContext(menus);

export const Menu = () => {
  const [menu, setMenu] = useState<IMenus>(menus);

  return (
    <>
      <MenuContext.Provider value={menus}>
        <Category menus={menus} />
      </MenuContext.Provider>
      <div>
        <Outlet context={{ menus }}></Outlet>
      </div>
    </>
  );
};
