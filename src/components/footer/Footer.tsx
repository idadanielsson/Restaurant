import { RiFacebookBoxLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import {
  NavBar,
  NavBarContainer,
  NavItem,
  NavLink,
  NavList,
} from "../styled/NavBar";
import {
  FooterContainerWrapper,
  FooterContentWrapper,
  FooterIconLinks,
  FooterWrapper,
  Wrapper,
} from "../styled/Wrappers";
import { BG_COLOR, CHAMPAGNE, DARK_FONT_COLOR } from "../styled/Colors";
import { H5 } from "../styled/Headings";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainerWrapper>
        <NavBarContainer>
          <NavBar>
            <NavList justify="center">
              <NavItem fontSize="26px" gap="55px">
                <NavLink color={DARK_FONT_COLOR} to="/">
                  Hem
                </NavLink>
                <NavLink color={DARK_FONT_COLOR} to="/menu/1">
                  Meny
                </NavLink>
                <NavLink color={DARK_FONT_COLOR} to="/booking">
                  Bokning
                </NavLink>
                <NavLink color={DARK_FONT_COLOR} to="/contact">
                  Kontakt
                </NavLink>
              </NavItem>
            </NavList>
          </NavBar>
        </NavBarContainer>

        <FooterContentWrapper>
          <FooterIconLinks href="https://www.instagram.com/">
            <RxInstagramLogo />
          </FooterIconLinks>
          <FooterIconLinks href="https://www.facebook.com/">
            <RiFacebookBoxLine />
          </FooterIconLinks>
          <FooterIconLinks href="https://www.google.com/intl/sv/gmail/about/">
            <AiOutlineMail />
          </FooterIconLinks>
        </FooterContentWrapper>
        <FooterContentWrapper>
          <H5 fontSize="23px" color={DARK_FONT_COLOR} width="27%">
            Nybrogatan 76 114 39 Stockholm
          </H5>
        </FooterContentWrapper>
      </FooterContainerWrapper>
    </FooterWrapper>
  );
};
