import { ContactHeading, H2 } from "../styled/Headings";
import { BackgroundImage } from "../styled/Images";
import { ContactTextWrapper, Wrapper } from "../styled/Wrappers";
import bgImageContact from "./../../assets/restaurant-pasta-2.png";

export const Contact = () => {
  return (
    <Wrapper height="100vh" width="100%">
      <BackgroundImage
        bgImage={bgImageContact}
        display="flex"
        direction="column"
        justify="center"
        align="center"
        gap="40px"
      >
        <H2 fontSize="90px">Contact</H2>
        <ContactTextWrapper>
          <ContactHeading fontSize="34px">
            Contact@76gastronome.com
          </ContactHeading>
          <ContactHeading fontSize="34px">0707 - 10 10 10</ContactHeading>
          <ContactHeading width="47%" fontSize="34px">
            Nybrogatan 76 114 39 Stockholm
          </ContactHeading>
        </ContactTextWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};
