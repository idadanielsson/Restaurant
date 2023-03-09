import { H2, H5 } from "../../styled/Headings";
import { AboutImageWrapper } from "../../styled/Images";
import { AboutTextWrapper, Wrapper } from "../../styled/Wrappers";

export const About = () => {
  return (
    <Wrapper height="100vh">
      <AboutTextWrapper>
        <H2>Vår Historia</H2>
        <H5>
          Sju rätter. Sju drycker. Det är vad vi började med. Vårt ursprungliga
          utbud var avskalat men perfekt kurerat. Utbudet har växt mycket sen
          dess men vår strävan efter perfektion kvarstår.
        </H5>
      </AboutTextWrapper>

      <AboutImageWrapper></AboutImageWrapper>
    </Wrapper>
  );
};
