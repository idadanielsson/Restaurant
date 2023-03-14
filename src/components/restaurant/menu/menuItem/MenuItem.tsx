import { IMenu, IMenus } from "../../../../models/IMenu";
import { H5 } from "../../../styled/Headings";

interface IMenuItemProps {
  menu: IMenu;
}

export const MenuItem = (props: IMenuItemProps) => {
  return (
    <>
      <p>{props.menu.name}</p>
    </>
  );
};
