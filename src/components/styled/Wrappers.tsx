import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE } from "./Colors";

export interface IRestaurantWrapperProps {
  height?: string;
  width?: string;
  display?: string;
  justify?: string;
  bgcolor?: string;
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
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};

  /* border: 1px solid red; */
`;

export const HomeHeadingWrapper = styled.div`
  margin-top: 220px;
  margin-left: 20px;
`;

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
  margin-top: 55px;
  position: relative;
  background-color: ${BG_COLOR};
`;

export const SmallMenuWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  display: flex;
`;

export const CategoryWrapper = styled.div`
  width: 40%;
  padding: 20px;
`;

export const MenuWrapper = styled.div`
  width: 50%;
`;
