import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";

export const MenuListWrapper = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media ${breakpoint.mobileMenu} {
    width: 80%;
    align-items: center;
  }
`;

export const MenuItemWrapper = styled.li`
  padding-bottom: 20px;
  margin-left: 80px;

  @media ${breakpoint.mobileMenu} {
    margin: 0;
    padding: 0 20px;
    width: 100%;
  }
`;

export const ItemP = styled.p`
  font-size: 16px;
  font-family: "Cormorant Infant", serif;
  line-height: 25px;
  color: ${FONT_COLOR};
`;
