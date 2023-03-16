import { useParams } from "react-router-dom";
import { menus } from "../../../../models/IMenu";
import { ItemTitle } from "../../../styled/Headings";
import { ItemP, MenuItemWrapper } from "../../../styled/MenuItem";

export const MenuList = () => {
  const { id } = useParams();
  let newId = Number(id);

  const menuHtml = id
    ? menus
        .filter((m) => m.categoryId === newId)
        .map((m) => {
          return (
            <MenuItemWrapper>
              <ItemTitle>
                {m.name} | {m.price}
              </ItemTitle>

              <ItemP>{m.description}</ItemP>
            </MenuItemWrapper>
          );
        })
    : menus
        .filter((m) => m.categoryId === 1)
        .map((m) => {
          return (
            <MenuItemWrapper>
              <ItemTitle>
                {m.name} | {m.price}
              </ItemTitle>

              <ItemP>{m.description}</ItemP>
            </MenuItemWrapper>
          );
        });

  return <>{menuHtml}</>;
};
