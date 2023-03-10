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
  return (
    <BookingWrapper>
      <FormWrapper>
        <InputWrapper>
          <BookingFormHeading>Förnamn</BookingFormHeading>
          <Input type="text"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Efternamn</BookingFormHeading>

          <Input type="text"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>Telefonnummer</BookingFormHeading>

          <Input type="text"></Input>
        </InputWrapper>
        <InputWrapper>
          <BookingFormHeading>E-post</BookingFormHeading>

          <Input type="text"></Input>
        </InputWrapper>
      </FormWrapper>
      <BookTableButtonWrapper>
        <Button height="50px" width="200px">
          Bekräfta Bokning
        </Button>
        <Button height="50px" width="200px">
          Avbryt bokning
        </Button>
      </BookTableButtonWrapper>
    </BookingWrapper>
  );
};
