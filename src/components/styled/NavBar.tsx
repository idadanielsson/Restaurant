import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { CHAMPAGNE } from "./Colors";

export interface INavProps {
  fontSize?: string;
  display?: string;
  direction?: string;
  justify?: string;
  gap?: string;
  position?: string;
  Zindex?: string;
  height?: string;
  color?: string;
  marginRight?: string;
}

export const NavBarContainer = styled.div`
  @media ${breakpoint.mobileMenu} {
    display: none;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  position: ${(props: INavProps) => props.position};
  z-index: ${(props: INavProps) => props.Zindex};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: ${(props: INavProps) => props.justify};
  margin: 0px;
  margin-right: ${(props: INavProps) => props.marginRight};

  @media ${breakpoint.mobileMenu} {
    justify-content: start;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: ${(props: INavProps) => props.gap};
  font-size: ${(props: INavProps) => props.fontSize};
  font-weight: 500;

  @media ${breakpoint.mobileMenu} {
    flex-direction: ${(props: INavProps) => props.direction};
    gap: 20px;
    padding: 40px 0px;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props: INavProps) => props.color};
  text-decoration: none;
  padding: 10px;
  font-family: "Cormorant Infant", serif;
  text-align: center;
  transition: all ease 0.3s;
  :hover {
    font-size: 28px;
  }

  @media ${breakpoint.mobileMenu} {
    :hover {
      background-color: ${CHAMPAGNE};
      border-radius: 40px;
    }
  }
`;
