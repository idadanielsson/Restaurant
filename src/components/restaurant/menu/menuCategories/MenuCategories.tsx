import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMenu, IMenus } from "../../../../models/IMenu";
import { categories } from "../../../../models/IMenuCategory";
import { H5 } from "../../../styled/Headings";

interface MenuCategoriesProps {
  menu: IMenu;
}

export const MenuCategories = (props: MenuCategoriesProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${props.menu.id}`);
  };

  const categoryHtml = categories.categories.map((c) => {
    <div>
      <H5 onClick={handleClick}>{c.name}</H5>
    </div>;
  });

  return <>{categoryHtml}</>;
};
