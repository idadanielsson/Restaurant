import { useContext, useState } from "react";
import { IBooking } from "../../../../models/IBooking";
import { Button1, TimesButton } from "../../../styled/Buttons";
import { BookingFormHeading } from "../../../styled/Headings";
import { Input } from "../../../styled/Inputs";
import {
  BookingWrapper,
  CalendarWrapper,
  FormWrapper,
  InputWrapper,
  SearchTableButtonWrapper,
  SearchTableTimesWrapper,
} from "../../../styled/Wrappers";
import { Calendar } from "react-calendar";
import { BLUE, CHAMPAGNE } from "../../../styled/Colors";
import { AdminContext } from "../Admin";
import { getBookings } from "../../../../services/RestaurantService";
import { IBookingResponse } from "../../../../models/IBookingResponse";
import { Link } from "react-router-dom";

export const AdminSearch = () => {
  const { bookings, handleDate, formattedDate, getBookings } =
    useContext(AdminContext);

  return (
    <BookingWrapper>
      <FormWrapper>
        <InputWrapper>
          <BookingFormHeading>Förnamn</BookingFormHeading>
          <Input type="text" name="name"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Efternamn</BookingFormHeading>
          <Input type="text" name="lastname"></Input>
        </InputWrapper>
      </FormWrapper>

      <CalendarWrapper>
        <Calendar onClickDay={handleDate} />
      </CalendarWrapper>
      <SearchTableTimesWrapper>
        <TimesButton height="60px" width="200px">
          18.00
        </TimesButton>
        <TimesButton height="60px" width="200px">
          21.00
        </TimesButton>
      </SearchTableTimesWrapper>
      <SearchTableButtonWrapper>
        <Link to="/admin/bookings">
          {" "}
          <Button1 onClick={getBookings} height="50px" width="200px">
            Sök bord
          </Button1>
        </Link>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
