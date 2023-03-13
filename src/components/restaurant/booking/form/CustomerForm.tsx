import { ChangeEvent, FormEvent } from "react";
import { Button } from "../../../styled/Buttons";
import { BookingFormHeading } from "../../../styled/Headings";
import { Input } from "../../../styled/Inputs";
import {
  BookingWrapper,
  BookTableButtonWrapper,
  FormWrapper,
  InputWrapper,
  SearchTableButtonWrapper,
} from "../../../styled/Wrappers";

export const CustomerForm = () => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.type === "text") {
  //     setNånting({ ...nånting, [e.target.name]: e.target.value });
  //     if (e.target.type === "number") {
  //       setNånting({ ...nånting, [e.target.name]: e.target.value });
  //     }
  //     if (e.target.type === "e-mail") {
  //       setNånting({ ...nånting, [e.target.name]: e.target.value });
  //     }
  //   }
  // };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <BookingWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <BookingFormHeading>Förnamn</BookingFormHeading>
          <Input type="text" name="firstname"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Efternamn</BookingFormHeading>

          <Input type="text" name="lastname"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Telefonnummer</BookingFormHeading>

          <Input type="text" name="phone"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>E-post</BookingFormHeading>

          <Input type="e-mail" name="mail"></Input>
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
