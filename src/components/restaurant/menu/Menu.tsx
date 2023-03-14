import { useState } from "react";
import { Outlet } from "react-router-dom";
import { createContext } from "vm";
import { IMenu, IMenus, menus } from "../../../models/IMenu";
import { IMenuContext } from "../../../models/IMenuContext";

import { MenuCategories } from "./menuCategories/MenuCategories";

export const MenuContext = createContext<IMenuContext>({
  theMenus: "",
});

export const Menu = () => {
  const [theMenus, setTheMenus] = useState("");

  return (
    <>
      <MenuContext.Provider value={{ theMenus }}>
        <MenuCategories />

        <Outlet></Outlet>
      </MenuContext.Provider>
    </>
  );
};
