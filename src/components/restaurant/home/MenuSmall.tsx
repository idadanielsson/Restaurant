import { stringify } from "querystring";
import { useState } from "react";
import { IMenuList } from "../../../models/IMenuList";
import menuPlates from "./../../../assets/restaurant-plate-3.png";
import menuBrew from "./../../../assets/restaurant-brew.png";
import menuDrinks from "./../../../assets/restaurant-plate-2.png";
import {
  SmallMenuTitleWrapper,
  SmallMenuWrapper,
  Wrapper,
} from "../../styled/Wrappers";
import { SmallMenu, SmallMenuText } from "../../styled/SmallMenu";
import { useNavigate } from "react-router-dom";
import { BG_COLOR } from "../../styled/Colors";
import { H2 } from "../../styled/Headings";
import { Button } from "../../styled/Buttons";

export const MenuSmall = () => {
  const [menuSmall, setMenuSmall] = useState<IMenuList[]>([
    {
      image: menuPlates,
      name: "Gourmet plates",
    },
    {
      image: menuBrew,
      name: "Craft brews",
    },
    {
      image: menuDrinks,
      name: "Wine & coctails",
    },
  ]);

  const navigate = useNavigate();

  const toMenus = () => {
    navigate(`/menu`);
  };

  let menuSmallHtml = menuSmall.map((menuSmall) => {
    return (
      <SmallMenu bgimage={menuSmall.image}>
        <Button onClick={toMenus}>{menuSmall.name}</Button>
      </SmallMenu>
    );
  });

  return (
    <Wrapper>
      <SmallMenuWrapper height="30vh" bgcolor={BG_COLOR}>
        <SmallMenuTitleWrapper>
          <H2>ON THE MENU</H2>
        </SmallMenuTitleWrapper>
      </SmallMenuWrapper>
      <SmallMenuWrapper height="70vh">{menuSmallHtml}</SmallMenuWrapper>
    </Wrapper>
  );
};
