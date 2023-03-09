import { stringify } from "querystring";
import { useState } from "react";
import { IMenuList } from "../../../models/IMenuList";
import menuPlates from "./../../../assets/restaurant-plate-3.png";
import menuBrew from "./../../../assets/restaurant-brew.png";
import menuDrinks from "./../../../assets/restaurant-plate-2.png";
import { SmallMenuWrapper } from "../../styled/Wrappers";
import { SmallMenu, SmallMenuText } from "../../styled/SmallMenu";
import { MenuSmallImage, MenuSmallImageContainer } from "../../styled/Images";

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

  let menuSmallHtml = menuSmall.map((menuSmall) => {
    return (
      <SmallMenu>
        <MenuSmallImageContainer>
          <MenuSmallImage src={menuSmall.image} alt={menuSmall.name} />
        </MenuSmallImageContainer>
        <SmallMenuText>{menuSmall.name}</SmallMenuText>
      </SmallMenu>
    );
  });
  return <SmallMenuWrapper>{menuSmallHtml}</SmallMenuWrapper>;
};
