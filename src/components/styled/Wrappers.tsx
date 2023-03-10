import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE } from "./Colors";

export interface IRestaurantWrapperProps {
  height?: string;
  width?: string;
  display?: string;
  justify?: string;
  bgcolor?: string;
  bgimage?: string;
}

//

export const Wrapper = styled.div`
  height: ${(props: IRestaurantWrapperProps) => props.height};
  width: ${(props: IRestaurantWrapperProps) => props.width};
  display: ${(props: IRestaurantWrapperProps) => props.display};
  justify-content: ${(props: IRestaurantWrapperProps) => props.justify};
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};
`;

// HOME

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${BG_COLOR};
`;

export const HomeHeadingWrapper = styled.div`
  margin-top: 55px;
  margin-left: 150px;
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

// ABOUT

export const AboutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  position: relative;
  background-color: ${BG_COLOR};
`;

// MENU

export const SmallMenuWrapper = styled.div`
  width: 100%;
  height: ${(props: IRestaurantWrapperProps) => props.height};
  display: flex;
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};
`;

export const SmallMenuTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
