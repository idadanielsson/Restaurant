import { useOutletContext } from "react-router-dom";
import { H5 } from "../../../styled/Headings";
import { MenuContext } from "../Menu";
import { MenuItem } from "../menuItem/MenuItem";

export const Menus = () => {
  const { menus } = useOutletContext<MenuContext>();

  let menusHtml = menus.map((m) => {
    return (
      <>
        <H5>{m.name}</H5>
      </>
    );
  });

  return <>{menusHtml}</>;
};
