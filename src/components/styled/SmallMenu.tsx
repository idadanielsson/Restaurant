import styled from "styled-components";
import { FONT_COLOR } from "./Colors";
import { IRestaurantWrapperProps } from "./Wrappers";

export const SmallMenu = styled.div`
  background-image: url(${(props: IRestaurantWrapperProps) => props.bgimage});
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SmallMenuText = styled.p`
  font-size: 30px;
  color: ${FONT_COLOR};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 1px solid ${FONT_COLOR};
`;
