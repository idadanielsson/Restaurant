import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { CHAMPAGNE, FONT_COLOR } from "./Colors";
import { HeroTitleSlider } from "./Keyframes";

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
  animation-name: ${HeroTitleSlider};
  animation-duration: 1.5s;

  @media ${breakpoint.mobileMenu} {
    font-size: 50px;
  }
`;

export const H2 = styled.h2`
  font-size: ${(props: IHeadingsProps) => props.fontSize};
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  font-weight: 300;
  color: ${FONT_COLOR};

  @media ${breakpoint.mobileMenu} {
    font-size: 40px;
  }
`;

export const H3 = styled.h3`
  font-size: 50px;
  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
  width: ${(props: IHeadingsProps) => props.width};

  @media ${breakpoint.mobileMenu} {
    font-size: 28px;
  }
`;

export const H5 = styled.h5`
  font-size: ${(props: IHeadingsProps) => props.fontSize};
  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${(props: IHeadingsProps) => props.color};
  font-weight: 300;
  width: ${(props: IHeadingsProps) => props.width};

  @media ${breakpoint.mobileMenu} {
    font-size: 20px;
    width: 80%;
    text-align: center;
  }
`;

export const AmountOfGuestsHeading = styled(H5)`
  width: 50%;
  padding: 20px;
  color: ${FONT_COLOR};
  @media ${breakpoint.mobileMenu} {
    width: 80%;
  }
`;

export const BookingFormHeading = styled(H5)`
  font-size: 25px;
  padding: 10px;
  color: ${FONT_COLOR};
  @media ${breakpoint.mobileMenu} {
    font-size: 20px;
  }
`;

export const ContactHeading = styled(H5)`
  text-align: center;
`;

export const ItemTitle = styled.h6`
  font-size: 22px;
  font-family: "Cormorant Infant", serif;
  font-weight: 300;
  text-transform: uppercase;
  color: ${FONT_COLOR};
  margin: 0;

  @media ${breakpoint.mobileMenu} {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const MenuHeading = styled.h2`
  font-size: 60px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  padding: 60px;
  font-weight: 300;
  color: ${CHAMPAGNE};
  text-decoration: underline 1px;

  @media ${breakpoint.mobileMenu} {
    padding: 20px 0 0 0;
    font-size: 36px;
  }
`;
