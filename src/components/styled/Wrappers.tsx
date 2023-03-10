import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE, DARK_FONT_COLOR, FONT_COLOR } from "./Colors";

export interface IRestaurantWrapperProps {
  height?: string;
  width?: string;
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  bgcolor?: string;
  bgimage?: string;
}

//

export const Wrapper = styled.div`
  height: ${(props: IRestaurantWrapperProps) => props.height};
  width: ${(props: IRestaurantWrapperProps) => props.width};
  display: ${(props: IRestaurantWrapperProps) => props.display};
  flex-direction: ${(props: IRestaurantWrapperProps) => props.direction};
  justify-content: ${(props: IRestaurantWrapperProps) => props.justify};
  align-items: ${(props: IRestaurantWrapperProps) => props.align};
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

// LOCATION

export const LocationWrapper = styled.div`
  background-image: url(${(props: IRestaurantWrapperProps) => props.bgimage});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
`;

export const LocationTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 100px;
`;

export const LocationTextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  color: ${FONT_COLOR};
`;

export const LocationBTNContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

// FOOTER

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  text-align: center;
`;

export const FooterIconLinks = styled.a`
  color: ${DARK_FONT_COLOR};
  font-size: 50px;
  padding: 7px;
  box-shadow: 0 0 5px #716153;
  width: 50px;
  height: 50px;
`;
