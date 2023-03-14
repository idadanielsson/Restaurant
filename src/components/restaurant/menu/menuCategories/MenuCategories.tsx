import { useContext, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { createContext } from "vm";
import { IMenu, IMenus, menus } from "../../../../models/IMenu";
import { categories, IMenuCategory } from "../../../../models/IMenuCategory";
import { H5 } from "../../../styled/Headings";

export const MenuCategories = () => {
  const [theCategories, setTheCategories] = useState<IMenuCategory[]>([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const showMenu = () => {
    navigate(`/menu/${menus.menus}`);
    console.log(menus.menus);
  };

  const categoryHtml = categories.categories.map((c) => {
    return (
      <>
        <div key={c.id}>
          <H5 onClick={showMenu}>{c.name}</H5>
        </div>
      </>
    );
  });

  return <>{categoryHtml}</>;
};
