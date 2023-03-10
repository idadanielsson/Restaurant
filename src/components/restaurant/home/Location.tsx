import { Button } from "../../styled/Buttons";
import { BG_COLOR } from "../../styled/Colors";
import { H3, H5 } from "../../styled/Headings";
import {
  LocationTextContainer,
  LocationTextWrapper,
  LocationWrapper,
  Wrapper,
} from "../../styled/Wrappers";

import foodPlate from "./../../../assets/restaurant-plate-1.png";

export const Location = () => {
  return (
    <Wrapper
      height="100vh"
      bgcolor={BG_COLOR}
      display="flex"
      direction="row-reverse"
    >
      <LocationWrapper bgimage={foodPlate}></LocationWrapper>
      <LocationTextWrapper>
        <H3 width="49%">Upplev en utmärkt middag på 76 Gastronome</H3>
        <LocationTextContainer>
          <H5>Nybrogatan 76, 114 39 Stockholm</H5>
          <H5>Contact@76gastronome.com</H5>
          <H5>0707 - 10 10 10</H5>
        </LocationTextContainer>
        <Button>Boka bord</Button>
      </LocationTextWrapper>
    </Wrapper>
  );
};
