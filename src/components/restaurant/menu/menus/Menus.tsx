import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IMenus, menus } from "../../../../models/IMenu";

import { H5 } from "../../../styled/Headings";
import { MenuContext } from "../Menu";
import { MenuItem } from "../menuItem/MenuItem";

export const Menus = () => {
  const [theMenus, setTheMenus] = useState<IMenus>();

  let menusHtml = menus.menus.map((m) => {
    return (
      <>
        <MenuItem key={m.id} menu={m}></MenuItem>
      </>
    );
  });
  return <>{menusHtml}</>;
};
