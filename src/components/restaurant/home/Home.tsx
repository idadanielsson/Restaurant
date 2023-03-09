import { H1 } from "../../styled/Headings";
import { HeroWrapper } from "../../styled/Images";
import { HomeHeadingWrapper, Wrapper } from "../../styled/Wrappers";
import { About } from "./About";
import { MenuSmall } from "./MenuSmall";

export const Home = () => {
  return (
    <>
      <Wrapper height="95vh" width="100%">
        <HeroWrapper>
          <HomeHeadingWrapper>
            <H1>The </H1>
            <H1>Gastronome</H1>
          </HomeHeadingWrapper>
        </HeroWrapper>
      </Wrapper>
      <About />
      <MenuSmall />
    </>
  );
};
