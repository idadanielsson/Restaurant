import { Link } from "react-router-dom";
import styled from "styled-components";
import { BG_COLOR } from "./Wrappers";

export const NavBar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${BG_COLOR};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
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
