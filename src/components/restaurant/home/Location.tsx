import { useNavigate } from "react-router-dom";
import { ButtonFade } from "../../styled/Buttons";
import { H3, H5 } from "../../styled/Headings";
import {
  LocationImageWrapper,
  LocationTextContainer,
  LocationTextWrapper,
  LocationWrapper,
} from "../../styled/Wrappers";

import foodPlate from "./../../../assets/restaurant-plate-1.png";

export const Location = () => {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate(`/booking`);
  };
  return (
    <LocationWrapper>
      <LocationImageWrapper bgimage={foodPlate}></LocationImageWrapper>
      <LocationTextWrapper>
        <H3 width="49%">Upplev en utmärkt middag på 76 Gastronome</H3>
        <LocationTextContainer>
          <H5 fontSize="26px">Nybrogatan 76, 114 39 Stockholm</H5>
          <H5 fontSize="26px">Contact@76gastronome.com</H5>
          <H5 fontSize="26px">0707 - 10 10 10</H5>
        </LocationTextContainer>
        <ButtonFade
          onClick={toBooking}
          padding="20px"
          fontSize="26px"
          fontWeight="700"
        >
          Boka bord
        </ButtonFade>
      </LocationTextWrapper>
    </LocationWrapper>
  );
};
