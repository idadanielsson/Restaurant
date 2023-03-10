import { FONT_COLOR } from "../styled/Colors";
import { NavBar, NavItem, NavLink, NavList } from "../styled/NavBar";

export const Nav = () => {
  return (
    <>
      <NavBar position="absolute" Zindex="1">
        <NavList justify="end" marginRight="30px">
          <NavItem gap="20px" fontSize="25px">
            <NavLink color={FONT_COLOR} to="/">
              Hem
            </NavLink>
            <NavLink color={FONT_COLOR} to="/menu">
              Meny
            </NavLink>
            <NavLink color={FONT_COLOR} to="/booking">
              Bokning
            </NavLink>
            <NavLink color={FONT_COLOR} to="/contact">
              Kontakt
            </NavLink>
          </NavItem>
        </NavList>
      </NavBar>
    </>
  );
};
