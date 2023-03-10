import {
  AmountOfGuestsCard,
  AmountOfGuestsWrapper,
  BookingWrapper,
  CalendarWrapper,
  SearchTableButtonWrapper,
} from "../../../styled/Wrappers";
import Calendar from "react-calendar";
import { AmountOfGuestsHeading, H5 } from "../../../styled/Headings";
import { Button } from "../../../styled/Buttons";
export const TableSearch = () => {
  const amountOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let amountOfGuestsHtml = amountOfGuests.map((g, i) => {
    return <AmountOfGuestsCard>{g}</AmountOfGuestsCard>;
  });

  return (
    <BookingWrapper>
      <AmountOfGuestsHeading>Välj antal gäster</AmountOfGuestsHeading>
      <AmountOfGuestsWrapper>{amountOfGuestsHtml}</AmountOfGuestsWrapper>
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <SearchTableButtonWrapper>
        <Button height="50px" width="200px">
          Sök bord
        </Button>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
