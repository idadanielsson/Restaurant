import { useParams } from "react-router-dom";
import { menus } from "../../../../models/IMenu";
import { H5 } from "../../../styled/Headings";
import { ItemTitle } from "../../../styled/MenuItem";
import { MenuBigWrapper } from "../../../styled/Wrappers";

export const Menus = () => {
  const { id } = useParams();
  let newId = Number(id);

  const menuHtml = menus
    .filter((m) => m.categoryId === newId)
    .map((m) => (
      <>
        <MenuBigWrapper>
          <ItemTitle>{m.name}</ItemTitle>
          <p>{m.price}</p>
          <p>{m.description}</p>
        </MenuBigWrapper>
      </>
    ));
  return <>{menuHtml}</>;
};
