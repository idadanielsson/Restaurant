import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE } from "./Colors";

export interface IRestaurantWrapperProps {
  height?: string;
  width?: string;
  display?: string;
  justify?: string;
}

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${BG_COLOR};
`;

export const Wrapper = styled.div`
  height: ${(props: IRestaurantWrapperProps) => props.height};
  width: ${(props: IRestaurantWrapperProps) => props.width};
  display: ${(props: IRestaurantWrapperProps) => props.display};
  justify-content: ${(props: IRestaurantWrapperProps) => props.justify};
  color: ${CHAMPAGNE};

  border: 1px solid red;
`;

export const imageWrapper = styled.div`
  height: ${(props: IRestaurantWrapperProps) => props.height};
  width: ${(props: IRestaurantWrapperProps) => props.width};
`;
