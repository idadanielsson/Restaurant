import { Link } from "react-router-dom";
import styled from "styled-components";
import { BG_COLOR } from "./Colors";

export const NavBar = styled.nav`
  width: 100%;
  height: 5vh;
  position: absolute;
  z-index: 1;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  margin: 0px;
`;

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 15px;
`;
