import { useNavigate } from "react-router-dom";
import { HeroButton } from "../../styled/Buttons";
import { H1 } from "../../styled/Headings";
import { HeroWrapper } from "../../styled/Images";
import backgroundImage from "./../../../assets/restaurant-hero.png";
import {
  HomeButtonWrapper,
  HomeHeadingWrapper,
  Wrapper,
} from "../../styled/Wrappers";
import { About } from "./About";
import { Location } from "./Location";
import { MenuSmall } from "./MenuSmall";

export const Home = () => {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate(`/booking`);
  };
  return (
    <>
      <Wrapper height="95vh" width="100%">
        <HeroWrapper bgImage={backgroundImage}>
          <HomeHeadingWrapper>
            <H1>76</H1>
            <H1>Gastronome</H1>
          </HomeHeadingWrapper>
          <HomeButtonWrapper>
            <HeroButton
              fontSize="40px"
              padding="20px 40px"
              fontWeight="500"
              onClick={toBooking}
            >
              Boka bord
            </HeroButton>
          </HomeButtonWrapper>
        </HeroWrapper>
      </Wrapper>
      <About />
      <MenuSmall />
      <Location />
    </>
  );
};
