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
import { Button, Button1, TimesButton } from "../../../styled/Buttons";
import { useContext } from "react";
import { BookingContext } from "../Booking";
import { BLUE, CHAMPAGNE, FONT_COLOR } from "../../../styled/Colors";
import { useNavigate } from "react-router-dom";
import { getBookings } from "../../../../services/RestaurantService";
import { IBooking } from "../../../../models/IBooking";
export const TableSearch = () => {
  const { handleAmountOfGuests, handleTime, handleDate, booking } =
    useContext(BookingContext);

  const amountOfGuestsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let navigate = useNavigate();

  const searchTable = async () => {
    let allBookings = await getBookings();

    let selectedBookings = allBookings.filter((b: IBooking) => {
      if (b.time === booking.time) if (b.date === booking.date) return b;
    });

    let availableTables = 15 - selectedBookings.length;

    console.log(availableTables);

    if (availableTables > 0) {
      navigate(`/booking/form`);
    } else {
      alert("Det finns inga lediga bord");
    }
  };

  let amountOfGuestsHtml = amountOfGuestsList.map((g) => {
    return (
      <AmountOfGuestsCard
        bgcolor={booking.numberOfGuests === g ? BLUE : CHAMPAGNE}
        color={FONT_COLOR}
        key={g}
        onClick={() => {
          handleAmountOfGuests(g);
        }}
      >
        {g}
      </AmountOfGuestsCard>
    );
  });

  return (
    <BookingWrapper>
      <AmountOfGuestsHeading fontSize="26px">
        Välj antal gäster
      </AmountOfGuestsHeading>
      <AmountOfGuestsWrapper>{amountOfGuestsHtml}</AmountOfGuestsWrapper>
      <CalendarWrapper>
        <Calendar onClickDay={handleDate} />
      </CalendarWrapper>
      <AmountOfGuestsHeading fontSize="26px">
        Föredragen tid
      </AmountOfGuestsHeading>

      <SearchTableTimesWrapper>
        <TimesButton
          bgcolor={booking.time === "18.00" ? BLUE : CHAMPAGNE}
          onClick={() => {
            handleTime("18.00");
          }}
          height="60px"
          width="200px"
        >
          18.00
        </TimesButton>
        <TimesButton
          bgcolor={booking.time === "21.00" ? BLUE : CHAMPAGNE}
          onClick={() => {
            handleTime("21.00");
          }}
          height="60px"
          width="200px"
        >
          21.00
        </TimesButton>
      </SearchTableTimesWrapper>
      <SearchTableButtonWrapper>
        <Button1 onClick={searchTable} height="50px" width="200px">
          Sök bord
        </Button1>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
