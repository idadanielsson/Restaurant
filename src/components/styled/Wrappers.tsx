import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import {
  BG_COLOR,
  CHAMPAGNE,
  FONT_COLOR,
  DARK_FONT_COLOR,
  BG_COLOR_FADE,
  ICON_SHADOW,
} from "./Colors";

export interface IRestaurantWrapperProps {
  height?: string;
  width?: string;
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  bgcolor?: string;
  bgimage?: string;
  color?: string;
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
  box-shadow: ${ICON_SHADOW};
  width: 50px;
  height: 50px;
`;

//CONTACT

export const ContactTextWrapper = styled.div`
  background-color: ${BG_COLOR_FADE};
  color: ${FONT_COLOR};
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

// BOOKING

export const BookingWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  width: 50%;

  background-color: #1e1f20;
  padding: 10px;
  border-radius: 5px;

  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 2px;
    background-color: #ab947e;
    border: 0;
    border-radius: 2px;
    color: #f2f4ea;
    font-weight: bold;
    padding: 20px 0;
    &:hover {
      background-color: #f2f4ea;
      color: #1e1f20;
      cursor: pointer;
    }
    &:active {
      background-color: #ab947e;
    }
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: ${FONT_COLOR};
  }
  .react-calendar__month-view__weekdays {
    color: ${FONT_COLOR};
    padding: 5px;
    font-family: "Cormorant Infant", serif;

    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;

export const AmountOfGuestsWrapper = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 40px;
  margin-bottom: 30px;
  gap: 10px;
`;

export const AmountOfGuestsCard = styled.div`
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};
  color: ${(props: IRestaurantWrapperProps) => props.color};
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: ${FONT_COLOR};
    color: ${BG_COLOR};
    cursor: pointer;
  }
`;

export const SearchTableTimesWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 3px;
`;

export const SearchTableButtonWrapper = styled.div`
  margin-top: 40px;
  width: 50%;
  display: flex;
  justify-content: start;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FormWrapper = styled.form`
  width: 60%;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 30px;
  justify-content: center;
`;

export const BookTableButtonWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 40px;
`;

export const AdminBookingWrapper = styled.div`
  background-color: ${CHAMPAGNE};
  padding: 10px;
`;

export const AdminBookingsWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-top: 70px;
  gap: 20px;
  margin: 2rem;
`;

export const AdminBookingButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const HamburgerWrapper = styled.div`
  position: absolute;
  z-index: 2;
  @media ${breakpoint.mobile} {
    display: none;
  }
`;

export const BigMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

export const MenuCategoryWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
`;

export const MenuCategoryItemWrapper = styled.div`
  width: 30%;
`;
