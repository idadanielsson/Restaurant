import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE, FONT_COLOR } from "./Colors";

export interface IButtonProps {
  height?: string;
  width?: string;
  padding?: string;
}

export const Button = styled.button`
  font-family: "Cormorant Infant", serif;
  border-radius: 50px;
  border: none;
  background-color: ${CHAMPAGNE};
  color: ${FONT_COLOR};
  height: ${(props: IButtonProps) => props.height};
  width: ${(props: IButtonProps) => props.width};
  padding: ${(props: IButtonProps) => props.padding};
  font-weight: 700;
  font-size: large;
  cursor: pointer;
`;

export const TimesButton = styled(Button)`
  border-radius: 2px;
  &:hover {
    background-color: ${FONT_COLOR};
    color: ${BG_COLOR};
  }
  &:active {
    background-color: red;
  }
`;
