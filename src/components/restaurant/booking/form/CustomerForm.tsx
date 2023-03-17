import { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { createBooking } from "../../../../services/RestaurantService";
import { Button1 } from "../../../styled/Buttons";
import { BookingFormHeading } from "../../../styled/Headings";
import { Input } from "../../../styled/Inputs";
import {
  BookingWrapper,
  BookTableButtonWrapper,
  FormWrapper,
  InputWrapper,
} from "../../../styled/Wrappers";
import swal from "sweetalert";
import { BookingContext } from "../Booking";

export const CustomerForm = () => {
  const { handleChange, booking } = useContext(BookingContext);

  return (
    <BookingWrapper>
      <FormWrapper
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          createBooking(booking);

          localStorage.removeItem("booking");
          swal("Tack för din bokning!", "", "success");
        }}
      >
        <InputWrapper>
          <BookingFormHeading>Förnamn</BookingFormHeading>
          <Input
            type="text"
            required
            onChange={handleChange}
            name="name"
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Efternamn</BookingFormHeading>

          <Input
            type="text"
            required
            onChange={handleChange}
            name="lastname"
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Telefonnummer</BookingFormHeading>

          <Input
            type="text"
            onChange={handleChange}
            name="phone"
            pattern="[0-9]{10}"
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>E-post</BookingFormHeading>

          <Input
            type="e-mail"
            pattern=".+@.+\..+"
            onChange={handleChange}
            name="email"
          ></Input>
        </InputWrapper>
        <BookTableButtonWrapper>
          <Button1 padding="10px 50px">Bekräfta Bokning</Button1>

          <Link to="/">
            <Button1 padding="10px 50px">Avbryt bokning</Button1>
          </Link>
        </BookTableButtonWrapper>
      </FormWrapper>
    </BookingWrapper>
  );
};
