import { NavBar, NavItem, NavLink, NavList } from "../styled/NavBar";

export const Nav = () => {
  return (
    <>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLink to="/">Hem</NavLink>
            <NavLink to="/menu">Meny</NavLink>
            <NavLink to="/booking">Bokning</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
    </>
  );
};
