import { useParams } from "react-router-dom";
import { menus } from "../../../../models/IMenu";
import { ItemTitle } from "../../../styled/Headings";
import { ItemP, MenuItemWrapper } from "../../../styled/MenuItem";

export const MenuList = () => {
  const { id } = useParams();
  let newId = Number(id);

  const menuHtml = menus
    .filter((m) => m.categoryId === newId)
    .map((m) => (
      <MenuItemWrapper>
        <ItemTitle>
          {m.name} | {m.price}
        </ItemTitle>

        <ItemP>{m.description}</ItemP>
      </MenuItemWrapper>
    ));
  return <>{menuHtml}</>;
};
