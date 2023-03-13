import {
  AmountOfGuestsCard,
  AmountOfGuestsWrapper,
  BookingWrapper,
  CalendarWrapper,
  SearchTableButtonWrapper,
  SearchTableTimesWrapper,
} from "../../../styled/Wrappers";
import Calendar from "react-calendar";
import { AmountOfGuestsHeading, H5 } from "../../../styled/Headings";
import { Button, TimesButton } from "../../../styled/Buttons";
import { useState } from "react";
export const TableSearch = () => {
  const amountOfGuestsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let amountOfGuestsHtml = amountOfGuestsList.map((g) => {
    return <AmountOfGuestsCard>{g}</AmountOfGuestsCard>;
  });

  // const handleChange = () => {

  // }

  return (
    <BookingWrapper>
      <AmountOfGuestsHeading>Välj antal gäster</AmountOfGuestsHeading>
      <AmountOfGuestsWrapper>{amountOfGuestsHtml}</AmountOfGuestsWrapper>
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <AmountOfGuestsHeading>Föredragen tid</AmountOfGuestsHeading>

      <SearchTableTimesWrapper>
        <TimesButton height="60px" width="200px">
          18.00
        </TimesButton>
        <TimesButton height="60px" width="200px">
          21.00
        </TimesButton>
      </SearchTableTimesWrapper>
      <SearchTableButtonWrapper>
        <Button height="50px" width="200px">
          Sök bord
        </Button>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
