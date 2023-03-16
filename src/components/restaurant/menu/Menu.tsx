import { Outlet } from "react-router-dom";
import { IMenu, menus } from "../../../models/IMenu";
import { MenuListWrapper } from "../../styled/MenuItem";
import {
  BigMenuWrapper,
  MenuCategoryItemWrapper,
  MenuCategoryWrapper,
  Wrapper,
} from "../../styled/Wrappers";
import { MenuCategories } from "./menuCategories/MenuCategories";

export type MenuContext = { menus: IMenu[] };

export const Menu = () => {
  return (
    <BigMenuWrapper>
      <MenuCategoryWrapper>
        <MenuCategories />
      </MenuCategoryWrapper>

      <MenuListWrapper>
        <Outlet context={{ menus }}></Outlet>
      </MenuListWrapper>
    </BigMenuWrapper>
  );
};
