import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMenu, menus } from "../../../../models/IMenu";
import { categories } from "../../../../models/IMenuCategory";
import { Button1 } from "../../../styled/Buttons";
import { BLUE, CHAMPAGNE, CHAMPAGNE_FADE } from "../../../styled/Colors";
import { H5, H6 } from "../../../styled/Headings";
import {
  MenuCategoryItemWrapper,
  MenuCategoryWrapper,
} from "../../../styled/Wrappers";

export const MenuCategories = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const navigate = useNavigate();

  const showMenu = (m: number) => {
    navigate(`/menu/${m}`);
    console.log(menus);
  };

  const handleBackgroundColor = (c: string) => {
    setBackgroundColor(c);
  };

  const categoryHtml = categories.categories.map((c) => {
    return (
      <>
        <Button1
          padding="10px 15px"
          bgcolor={backgroundColor === c.name ? BLUE : CHAMPAGNE}
          onClick={() => {
            showMenu(c.id);
            handleBackgroundColor(c.name);
          }}
        >
          {c.name}
        </Button1>
      </>
    );
  });

  return <>{categoryHtml}</>;
};
