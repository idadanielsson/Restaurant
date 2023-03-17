import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
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
  margin?: string;
  bgcolor?: string;
  color?: string;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
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
  margin: ${(props: IButtonProps) => props.margin};

  font-size: large;
  cursor: pointer;
  @media ${breakpoint.mobileMenu} {
    padding: 15px 40px;
    font-size: 12px;
  }
`;

export const TimesButton = styled(Button)`
  border-radius: 2px;
  color: ${(props: IButtonProps) => props.color};
  background-color: ${(props: IButtonProps) => props.bgcolor};
  &:hover {
    background-color: ${FONT_COLOR};
    color: ${BG_COLOR};
  }

  @media ${breakpoint.mobileMenu} {
    height: 45px;
    width: 140px;
  }
`;

export const ButtonFade = styled.button`
  font-family: "Cormorant Infant", serif;
  background-color: ${CHAMPAGNE_FADE};
  border: ${BTN_BORDER};
  border-radius: 50px;
  color: ${FONT_COLOR};
  padding: ${(props: IButtonProps) => props.padding};
  font-size: ${(props: IButtonProps) => props.fontSize};
  transition: all ease 0.2s;
  font-weight: ${(props: IButtonProps) => props.fontWeight};
  margin: ${(props: IButtonProps) => props.margin};
  cursor: pointer;

  :hover {
    background-color: ${CHAMPAGNE};
  }

  @media ${breakpoint.mobileMenu} {
    padding: 7px 15px;
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${breakpoint.mobileMenu} {
    flex-direction: row;
    gap: 12px;
  }
`;

export const HeroButton = styled(ButtonFade)`
  text-transform: uppercase;

  @media ${breakpoint.mobileMenu} {
    font-size: 20px;
    padding: 20px;
  }
`;

export const DeleteButton = styled(Button)`
  padding: 15px;
`;

export const EditButton = styled(DeleteButton)`
  @media ${breakpoint.mobileMenu} {
    padding: 15px;
  }
`;
