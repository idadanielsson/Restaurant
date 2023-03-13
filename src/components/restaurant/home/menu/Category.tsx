import { createContext, useContext, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { categories } from "../../../../models/Category";
import { IMenu, IMenus, menus } from "../../../../models/IMenu";
import { H5 } from "../../../styled/Headings";
import { CategoryWrapper } from "../../../styled/Wrappers";

interface ICategoryProps {
  menus: IMenus;
}
export const Category = (props: ICategoryProps) => {
  const navigate = useNavigate();

  const handleClick = (i: number) => {
    navigate(`/menu/${props.menus}`);
    console.log(props.menus.menus);
  };

  let categoryHtml = categories.categories.map((c, i) => {
    return (
      <>
        <CategoryWrapper key={c.id}>
          <button
            onClick={() => {
              handleClick(i);
            }}
          >
            {c.name}
          </button>
        </CategoryWrapper>
      </>
    );
  });

  return <>{categoryHtml}</>;
};
