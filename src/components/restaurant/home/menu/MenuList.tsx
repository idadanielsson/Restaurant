import { useContext, useState } from "react";
import { IMenu, IMenus, menus } from "../../../../models/IMenu";
import { MenuContext } from "./Menu";
import { MenuItem } from "./MenuItem";

export const MenuList = () => {
  const menu = useContext(MenuContext);
  const [theMenus, setTheMenus] = useState<IMenu[]>([]);

  const menuListHtml = menus.menus.map((m) => {
    return (
      <>
        <div>
          <h5>{m.name}</h5>
          <h5>{m.price}</h5>
        </div>
      </>
    );
  });

  return <>{menuListHtml}</>;
};
