import styled from "styled-components";
import { FONT_COLOR } from "./Colors";

export const H1 = styled.h1`
  font-size: 160px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
`;

export const H2 = styled.h2`
  font-size: 100px;
  font-family: "Cormorant Infant", serif;
  text-transform: uppercase;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
`;

export const H5 = styled.h5`
  font-size: 40px;

  font-family: "Cormorant Infant", serif;
  margin: 0px;
  color: ${FONT_COLOR};
  font-weight: 300;
  width: 40%;
`;

export const AmountOfGuestsHeading = styled(H5)`
  width: 50%;
  padding: 20px;
`;

export const BookingFormHeading = styled(H5)`
  font-size: 25px;
  padding: 10px;
`;
