import { BackgroundImage } from "../styled/Images";
import { Wrapper } from "../styled/Wrappers";
import bgImageContact from "./../../assets/restaurant-pasta-2.png";

export const Contact = () => {
  return (
    <Wrapper height="100vh" width="100%">
      <BackgroundImage bgImage={bgImageContact}></BackgroundImage>
    </Wrapper>
  );
};
