import styled from "styled-components";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";

export const MenuListWrapper = styled.ul`
  width: 40%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

export const MenuItemWrapper = styled.li`
  width: 100%;
  height: 550px;
  padding-bottom: 20px;
  margin-left: 80px;
`;

export const ItemP = styled.p`
  font-size: 16px;
  font-family: "Cormorant Infant", serif;
  line-height: 25px;
  color: ${FONT_COLOR};
`;
