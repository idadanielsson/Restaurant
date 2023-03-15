import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { IMenu, menus } from "../../../models/IMenu";
import { H5 } from "../../styled/Headings";

import { MenuCategories } from "./menuCategories/MenuCategories";

export type MenuContext = { menus: IMenu[] };

export const Menu = () => {
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
