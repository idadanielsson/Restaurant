import styled from "styled-components";
import { BG_COLOR, BTN_BORDER, CHAMPAGNE, FONT_COLOR } from "./Colors";

export interface IButtonProps {
  height?: string;
  width?: string;
  padding?: string;
  bgcolor?: string;
  color?: string;
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

export const HeroButton = styled.button`
  background-color: #ab947e98;
  border: ${BTN_BORDER};
  color: ${FONT_COLOR};
  padding: 20px 40px;
  font-size: 40px;
  cursor: pointer;
  transition: all ease 0.2s;
  font-family: "Cormorant Infant", serif;
  font-weight: 500;
  text-transform: uppercase; //osäker
  border-radius: 50px;
  :hover {
    background-color: #ab947e;
  }
`;
