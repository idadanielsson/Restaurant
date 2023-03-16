import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menus } from "../../../../models/IMenu";
import { categories } from "../../../../models/IMenuCategory";
import { Button } from "../../../styled/Buttons";
import { BLUE, CHAMPAGNE } from "../../../styled/Colors";

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
        <Button
          margin="12px"
          padding="7px 20px"
          fontSize="28px"
          bgcolor={backgroundColor === c.name ? BLUE : CHAMPAGNE}
          onClick={() => {
            showMenu(c.id);
            handleBackgroundColor(c.name);
          }}
        >
          {c.name}
        </Button>
      </>
    );
  });

  return <>{categoryHtml}</>;
};
