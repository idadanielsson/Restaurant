import { Outlet } from "react-router-dom";
import { MenuHeading } from "../../styled/Headings";
import { MenuListWrapper } from "../../styled/MenuItem";
import {
  BigMenuWrapper,
  MenuCategoryWrapper,
  Wrapper,
} from "../../styled/Wrappers";
import { MenuCategories } from "./menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <Wrapper height="100vh" display="flex" align="center" direction="column">
      <MenuHeading>Vår meny</MenuHeading>
      <BigMenuWrapper>
        <MenuCategoryWrapper>
          <MenuCategories />
        </MenuCategoryWrapper>

        <MenuListWrapper>
          <Outlet></Outlet>
        </MenuListWrapper>
      </BigMenuWrapper>
    </Wrapper>
  );
};
