import styled from "styled-components";
import aboutIMage from "./../../assets/restaurant-pasta.png";

export interface IImageProps {
  bgImage?: string;
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}

export const AboutImageWrapper = styled.div`
  background-image: url(${aboutIMage});
  height: 50vh;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 0;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props: IImageProps) => props.bgImage});
  display: ${(props: IImageProps) => props.display};
  flex-direction: ${(props: IImageProps) => props.direction};
  justify-content: ${(props: IImageProps) => props.justify};
  align-items: ${(props: IImageProps) => props.align};
  gap: ${(props: IImageProps) => props.gap}; ;
`;

export const HeroWrapper = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const MenuSmallImage = styled.img`
  width: 100%;
`;

export const MenuSmallImageContainer = styled.div`
  width: 100%;
`;
