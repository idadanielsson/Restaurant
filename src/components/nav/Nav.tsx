import { FONT_COLOR } from "../styled/Colors";
import { NavItem, NavLink, NavList } from "../styled/NavBar";
import { HamburgerWrapper } from "../styled/Wrappers";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./nav.css";

export const Nav = () => {
  const [isOpen, setOpen] = useState(Boolean);
  const onClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <HamburgerWrapper onClick={onClick}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="left"
          duration={0.3}
          distance="lg"
          color={FONT_COLOR}
          easing="ease-in"
          onToggle={(toggled: any) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          rounded
          label="Show menu"
          hideOutline={false}
        ></Hamburger>
      </HamburgerWrapper>

      <div className={isOpen ? "navActive" : "nav"}>
        <NavList justify="end" marginRight="30px">
          <NavItem direction="column" gap="20px" fontSize="25px">
            <NavLink color={FONT_COLOR} to="/">
              Hem
            </NavLink>
            <NavLink color={FONT_COLOR} to="/menu/1">
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
      </div>
    </>
  );
};
