import styled from "styled-components";
import { FONT_COLOR } from "./Colors";

export const SmallMenu = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
`;

export const SmallMenuText = styled.p`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  font-size: 30px;
  color: ${FONT_COLOR};
`;
