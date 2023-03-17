import { useState } from "react";
import { IMenuList } from "../../../models/IMenuList";
import menuPlates from "./../../../assets/restaurant-plate-3.png";
import menuBrew from "./../../../assets/restaurant-brew.png";
import menuDrinks from "./../../../assets/restaurant-plate-2.png";
import {
  MenuSmallWrapper,
  SmallMenuTextWrapper,
  SmallMenuTitleWrapper,
  SmallMenuWrapper,
} from "../../styled/Wrappers";
import { SmallMenu } from "../../styled/SmallMenu";
import { useNavigate } from "react-router-dom";

import { H2 } from "../../styled/Headings";
import { ButtonFade } from "../../styled/Buttons";

export const MenuSmall = () => {
  const [menuSmall, setMenuSmall] = useState<IMenuList[]>([
    {
      id: "1",
      image: menuPlates,
      name: "Gourmet plates",
    },
    {
      id: "2",
      image: menuBrew,
      name: "Craft brews",
    },
    {
      id: "3",
      image: menuDrinks,
      name: "Wine & coctails",
    },
  ]);

  const navigate = useNavigate();

  const toMenus = () => {
    navigate(`/menu/1`);
  };

  let menuSmallHtml = menuSmall.map((menuSmall) => {
    return (
      <SmallMenu key={menuSmall.id} bgimage={menuSmall.image}>
        <ButtonFade
          padding="20px"
          fontSize="24px"
          fontWeight="700"
          onClick={toMenus}
        >
          {menuSmall.name}
        </ButtonFade>
      </SmallMenu>
    );
  });

  return (
    <MenuSmallWrapper>
      <SmallMenuTextWrapper>
        <SmallMenuTitleWrapper>
          <H2 fontSize="60px">På menyn</H2>
        </SmallMenuTitleWrapper>
      </SmallMenuTextWrapper>
      <SmallMenuWrapper height="70vh">{menuSmallHtml}</SmallMenuWrapper>
    </MenuSmallWrapper>
  );
};
