import styled from "styled-components";
import { BTN_BORDER, FONT_COLOR } from "./Colors";

export const Button = styled.button`
  background-color: #ab947e98;
  border: ${BTN_BORDER};
  color: ${FONT_COLOR};
  padding: 20px;
  font-size: 25px;
  cursor: pointer;
  transition: all ease 0.2s;
  font-family: "Cormorant Infant", serif;
  font-weight: bold;
  border-radius: 50px;
  :hover {
    background-color: #ab947e;
  }
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
