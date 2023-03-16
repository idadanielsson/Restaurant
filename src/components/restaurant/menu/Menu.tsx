import { Outlet } from "react-router-dom";
import { IMenu, menus } from "../../../models/IMenu";
import { H2, H5 } from "../../styled/Headings";
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
    <Wrapper width="100%" height="100%">
      <H5>Vår meny</H5>
      <BigMenuWrapper>
        <MenuCategoryWrapper>
          <MenuCategories />
        </MenuCategoryWrapper>

        <MenuListWrapper>
          <Outlet context={{ menus }}></Outlet>
        </MenuListWrapper>
      </BigMenuWrapper>
    </Wrapper>
  );
};
