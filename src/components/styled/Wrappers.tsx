import styled from "styled-components";
import { BG_COLOR, CHAMPAGNE, FONT_COLOR } from "./Colors";

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
  justify-content: space-between;
`;

export const AmountOfGuestsCard = styled.div`
  background-color: ${CHAMPAGNE};
  color: ${FONT_COLOR};
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

export const FormWrapper = styled.div`
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
