import styled from "styled-components";
import backgroundImage from "./../../assets/restaurant-hero.png";
import aboutIMage from "./../../assets/restaurant-pasta.png";

export const AboutImageWrapper = styled.div`
  background-image: url(${aboutIMage});
  height: 50vh;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 0;
`;

export const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  z-index: 0;
  background-image: url(${backgroundImage});
`;

export const MenuSmallImage = styled.img`
  width: 100%;
`;

export const MenuSmallImageContainer = styled.div`
  width: 100%;
`;
