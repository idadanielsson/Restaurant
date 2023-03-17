import { Outlet } from "react-router-dom";
import { MenuHeading } from "../../styled/Headings";

import {
  BigMenuWrapper,
  MenuCategoryWrapper,
  MenuListWrapper,
  MenuWrapper,
} from "../../styled/Wrappers";
import { MenuCategories } from "./menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <MenuWrapper>
      <MenuHeading>Vår meny</MenuHeading>
      <BigMenuWrapper>
        <MenuCategoryWrapper>
          <MenuCategories />
        </MenuCategoryWrapper>

        <MenuListWrapper>
          <Outlet></Outlet>
        </MenuListWrapper>
      </BigMenuWrapper>
    </MenuWrapper>
  );
};
