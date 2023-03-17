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

  @media ${breakpoint.mobileMenu} {
    height: 80vh;
  }
`;

// HOME

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${BG_COLOR};
  @media ${breakpoint.mobileMenu} {
    height: 100%;
  }
`;

export const HomeHeadingWrapper = styled.div`
  margin-top: 55px;
  margin-left: 150px;

  @media ${breakpoint.mobileMenu} {
    margin-left: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;

  @media ${breakpoint.mobileMenu} {
    margin-top: 0;
  }
`;

// ABOUT

export const AboutTextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  position: relative;
  background-color: ${BG_COLOR};

  @media ${breakpoint.mobileMenu} {
    flex-direction: column;
    justify-content: center;
    height: 40vh;
    gap: 40px;
    margin-top: 10px;
  }
`;

// MENU

export const MenuSmallWrapper = styled.div``;

export const SmallMenuWrapper = styled.div`
  width: 100%;
  height: ${(props: IRestaurantWrapperProps) => props.height};
  display: flex;
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};

  @media ${breakpoint.mobileMenu} {
    height: 100vh;
    flex-direction: column;
  }
`;

export const SmallMenuTextWrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  background-color: ${BG_COLOR};

  @media ${breakpoint.mobileMenu} {
    height: 20vh;
  }
`;

export const SmallMenuTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// LOCATION

export const LocationWrapper = styled.div`
  height: 100vh;
  background-color: ${BG_COLOR};
  display: flex;
  flex-direction: row-reverse;

  @media ${breakpoint.mobileMenu} {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const LocationImageWrapper = styled.div`
  background-image: url(${(props: IRestaurantWrapperProps) => props.bgimage});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;

  @media ${breakpoint.mobileMenu} {
    width: 100%;
    height: 50vh;
  }
`;

export const LocationTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 100px;

  @media ${breakpoint.mobileMenu} {
    width: 100%;
    gap: 50px;
    margin: 2rem 0px;
  }
`;

export const LocationTextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  color: ${FONT_COLOR};

  @media ${breakpoint.mobileMenu} {
    width: 100%;
    align-items: center;
  }
`;

export const LocationBTNContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

// FOOTER

export const FooterWrapper = styled.div`
  height: 40vh;
  background-color: ${CHAMPAGNE};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.mobileMenu} {
    height: 30vh;
  }
`;

export const FooterContainerWrapper = styled.div`
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

  @media ${breakpoint.mobileMenu} {
    width: 300px;
    height: 350px;
    gap: 40px;
  }
`;

// BOOKING

export const BookingWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: ${BG_COLOR};
  @media ${breakpoint.mobileMenu} {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const CalendarWrapper = styled.div`
  width: 50%;
  background-color: #1e1f20;
  padding: 10px;
  border-radius: 5px;
  @media ${breakpoint.mobileMenu} {
    width: 80%;
  }

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
    padding: 15px 0;
    &:hover {
      background-color: #f2f4ea;
      color: #1e1f20;
      cursor: pointer;
    }
    &:active {
      background-color: #ab947e;
    }
    @media ${breakpoint.mobileMenu} {
      padding: 10px 0;
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
    @media ${breakpoint.mobileMenu} {
      font-size: 10px;
    }
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
  margin-bottom: 20px;
  gap: 10px;
  @media ${breakpoint.mobileMenu} {
    width: 80%;
  }
`;

export const AmountOfGuestsCard = styled.div`
  background-color: ${(props: IRestaurantWrapperProps) => props.bgcolor};
  color: ${(props: IRestaurantWrapperProps) => props.color};
  height: 60px;
  width: 60px;
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
  @media ${breakpoint.mobileMenu} {
    height: 40px;
  }
`;

export const SearchTableTimesWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 3px;
  @media ${breakpoint.mobileMenu} {
    width: 80%;
  }
`;

export const SearchTableButtonWrapper = styled.div`
  margin-top: 40px;
  width: 50%;
  display: flex;
  justify-content: start;
  @media ${breakpoint.mobileMenu} {
    width: 80%;
  }
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

  gap: 30px;
  justify-content: center;
  @media ${breakpoint.mobileMenu} {
    width: 80%;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const BookTableButtonWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 40px;
  @media ${breakpoint.mobileMenu} {
    width: 100%;
    justify-content: center;
  }
`;

export const AdminBookingWrapper = styled.div`
  background-color: ${CHAMPAGNE};
  padding: 10px;
  border-radius: 5px;
  @media ${breakpoint.mobileMenu} {
  }
`;

export const AdminBookingsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-top: 70px;
  gap: 20px;
  padding: 4rem 2rem;
  background-color: ${BG_COLOR};

  @media ${breakpoint.mobileMenu} {
    grid-template-columns: 1fr;
    padding: 6rem 2rem;
  }
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
  display: flex;
  justify-content: center;
  padding: 0;

  @media ${breakpoint.mobileMenu} {
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${breakpoint.mobileMenu} {
    flex-direction: row;
    margin: 0;
  }
`;

export const MenuListWrapper = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 0;

  @media ${breakpoint.mobileMenu} {
    width: 80%;
    align-items: center;
  }
`;

export const MenuItemWrapper = styled.li`
  padding-bottom: 20px;
  margin-left: 21%;

  @media ${breakpoint.mobileMenu} {
    margin: 0;
    padding: 0 20px;
    width: 100%;
  }
`;
export const MenuWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${breakpoint.mobileMenu} {
    height: 100%;
    padding: 2rem;
  }
`;

export const EditCardWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
