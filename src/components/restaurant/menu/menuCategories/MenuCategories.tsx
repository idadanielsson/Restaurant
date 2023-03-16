import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMenu, menus } from "../../../../models/IMenu";
import { categories } from "../../../../models/IMenuCategory";
import { H5, H6 } from "../../../styled/Headings";
import {
  MenuCategoryItemWrapper,
  MenuCategoryWrapper,
} from "../../../styled/Wrappers";

export const MenuCategories = () => {
  const navigate = useNavigate();

  const showMenu = (m: number) => {
    navigate(`/menu/${m}`);
    console.log(menus);
  };

  const categoryHtml = categories.categories.map((c) => {
    return (
      <>
        <H6
          onClick={() => {
            showMenu(c.id);
          }}
        >
          {c.name}
        </H6>
      </>
    );
  });

  return <>{categoryHtml}</>;
};
