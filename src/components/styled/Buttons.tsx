import styled from "styled-components";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";

export interface IButtonProps {
  height?: string;
  width?: string;
  padding?: string;
}

export const Button = styled.button`
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
