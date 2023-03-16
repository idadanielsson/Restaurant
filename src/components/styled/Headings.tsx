import styled from "styled-components";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";

export const H1 = styled.h1`
  font-size: 160px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
`;

export const H2 = styled.h2`
  font-size: 100px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
`;

export const H5 = styled.h5`
  font-size: 40px;
  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
  width: 40%;
`;

export const H6 = styled.button`
  color: ${CHAMPAGNE};
  font-family: "Cormorant Infant", serif;
  font-size: 34px;
  font-weight: 300;
  background-color: ${CHAMPAGNE};
  color: ${FONT_COLOR};
  padding: 5px 10px;
  cursor: pointer;
  border: none;
`;

export const ItemTitle = styled.h6`
  font-size: 22px;
  font-family: "Cormorant Infant", serif;
  font-weight: 300;
  text-transform: uppercase;
  color: ${FONT_COLOR};
  margin: 0;
`;
