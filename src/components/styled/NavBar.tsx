import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "./Breakpoints";
import { BG_COLOR } from "./Colors";

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
`;

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: ${(props: INavProps) => props.gap};
  font-size: ${(props: INavProps) => props.fontSize};
  font-weight: 500;

  @media ${breakpoint.mobileMenu} {
    flex-direction: ${(props: INavProps) => props.direction};
  }
`;

export const NavLink = styled(Link)`
  color: ${(props: INavProps) => props.color};
  text-decoration: none;
  padding: 15px;
  font-family: "Cormorant Infant", serif;
`;
