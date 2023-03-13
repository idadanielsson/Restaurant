import styled from "styled-components";
import {
  BG_COLOR,
  BTN_BORDER,
  CHAMPAGNE,
  CHAMPAGNE_FADE,
  FONT_COLOR,
} from "./Colors";

export interface IButtonProps {
  height?: string;
  width?: string;
  padding?: string;
  bgcolor?: string;
  color?: string;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Button1 = styled.button`
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

export const TimesButton = styled(Button1)`
  border-radius: 2px;
  color: ${(props: IButtonProps) => props.color};
  background-color: ${(props: IButtonProps) => props.bgcolor};
  &:hover {
    background-color: ${FONT_COLOR};
    color: ${BG_COLOR};
  }
  &:active {
    background-color: red;
  }
`;

export const Button = styled.button`
  font-family: "Cormorant Infant", serif;
  background-color: ${CHAMPAGNE_FADE};
  border: ${BTN_BORDER};
  border-radius: 50px;
  color: ${FONT_COLOR};
  padding: ${(props: IButtonProps) => props.padding};
  font-size: ${(props: IButtonProps) => props.fontSize};
  transition: all ease 0.2s;
  font-weight: ${(props: IButtonProps) => props.fontWeight};
  cursor: pointer;

  :hover {
    background-color: #ab947e;
  }
`;

export const HeroButton = styled(Button)`
  text-transform: uppercase;
`;
