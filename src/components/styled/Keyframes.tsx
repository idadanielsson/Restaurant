import { keyframes } from "styled-components";

export const HeroTitleSlider = keyframes`
    0%{
        transform: translate(-600px);
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        transform: translate(0px);
        opacity: 1;
    }
`;
