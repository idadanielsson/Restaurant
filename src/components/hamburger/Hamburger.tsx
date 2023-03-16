import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FONT_COLOR } from "../styled/Colors";
import { HamburgerWrapper } from "../styled/Wrappers";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  // const onClick = () => {
  //   setOpen(!isOpen);
  //   console.log(isOpen);
  // };

  console.log(isOpen);

  return (
    <HamburgerWrapper>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={20}
        direction="left"
        duration={0.3}
        distance="lg"
        color="#ff0000"
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
  );
};