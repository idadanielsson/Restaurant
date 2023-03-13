import { ChangeEvent, FormEvent, useContext } from "react";
import { createBooking } from "../../../../services/RestaurantService";
import { Button } from "../../../styled/Buttons";
import { BookingFormHeading } from "../../../styled/Headings";
import { Input } from "../../../styled/Inputs";
import {
  BookingWrapper,
  BookTableButtonWrapper,
  FormWrapper,
  InputWrapper,
} from "../../../styled/Wrappers";
import { BookingContext } from "../Booking";

export const CustomerForm = () => {
  const { handleChange, booking } = useContext(BookingContext);
  return (
    <BookingWrapper>
      <FormWrapper
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          createBooking(booking);
          console.log("hej");
        }}
      >
        <InputWrapper>
          <BookingFormHeading>Förnamn</BookingFormHeading>
          <Input type="text" onChange={handleChange} name="name"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Efternamn</BookingFormHeading>

          <Input type="text" onChange={handleChange} name="lastname"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Telefonnummer</BookingFormHeading>

          <Input type="text" onChange={handleChange} name="phone"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>E-post</BookingFormHeading>

          <Input type="e-mail" onChange={handleChange} name="email"></Input>
        </InputWrapper>
        <BookTableButtonWrapper>
          <Button height="50px" width="200px">
            Bekräfta Bokning
          </Button>
          <Button height="50px" width="200px">
            Avbryt bokning
          </Button>
        </BookTableButtonWrapper>
      </FormWrapper>
    </BookingWrapper>
  );
};
