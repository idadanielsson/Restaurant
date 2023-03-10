import styled from "styled-components";
import { FONT_COLOR } from "./Colors";

export interface IHeadingsProps {
  height?: string;
  width?: string;
  fontSize?: string;
  color?: string;
}

export const H1 = styled.h1`
  font-size: 137px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
`;

export const H2 = styled.h2`
  font-size: 60px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  font-weight: 300;
  color: ${FONT_COLOR};
`;

export const H3 = styled.h3`
  font-size: 50px;
  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
  width: ${(props: IHeadingsProps) => props.width};
`;

export const H5 = styled.h5`
  font-size: 26px;
  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${(props: IHeadingsProps) => props.color};
  font-weight: 300;
  width: ${(props: IHeadingsProps) => props.width};
`;
