import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { menus } from "../../../../models/IMenu";
import { categories, IMenuCategories } from "../../../../models/IMenuCategory";
import { H5 } from "../../../styled/Headings";
import { MenuContext } from "../Menu";

export const MenuCategories = () => {
  const navigate = useNavigate();

  const categoryHtml = categories.categories.map((c) => {
    <div key={c.id}>
      <H5>{c.name}</H5>
    </div>;
  });

  return <>{categoryHtml}</>;
};
