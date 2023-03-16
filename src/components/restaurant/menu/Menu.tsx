import { Outlet } from "react-router-dom";
import { IMenu, menus } from "../../../models/IMenu";
import { H1, H2, H5, MenuHeading } from "../../styled/Headings";
import { MenuListWrapper } from "../../styled/MenuItem";
import {
  BigMenuWrapper,
  MenuCategoryWrapper,
  Wrapper,
} from "../../styled/Wrappers";
import { MenuCategories } from "./menuCategories/MenuCategories";

export type MenuContext = { menus: IMenu[] };

export const Menu = () => {
  return (
    <Wrapper height="100vh" display="flex" align="center" direction="column">
      <MenuHeading fontSize="36px">Vår meny</MenuHeading>
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
