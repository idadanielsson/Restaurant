import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";

export interface IInputs {
  type?: string;
}

export const Input = styled.input`
  border-radius: 25px;
  height: 30px;
  background-color: ${CHAMPAGNE};
  border: none;
  font-size: large;
  outline: none;
  padding: 10px 15px;
  color: ${FONT_COLOR};
  @media ${breakpoint.mobileMenu} {
    font-size: medium;
    height: 20px;
  }
`;
