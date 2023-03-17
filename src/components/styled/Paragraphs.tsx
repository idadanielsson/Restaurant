import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { FONT_COLOR } from "./Colors";

export const AdminBookingParagraph = styled.p`
  color: ${FONT_COLOR};
  font-family: "Cormorant Infant", serif;
  font-size: 22px;
  font-weight: 300;

  @media ${breakpoint.mobileMenu} {
    font-size: 16px;
  }
`;

export const EditBookingParagraph = styled(AdminBookingParagraph)``;
