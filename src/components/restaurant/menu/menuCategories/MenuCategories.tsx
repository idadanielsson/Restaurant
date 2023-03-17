import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../../../models/IMenuCategory";
import { ButtonFade, ButtonWrapper } from "../../../styled/Buttons";
import { BLUE, CHAMPAGNE } from "../../../styled/Colors";

export const MenuCategories = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const navigate = useNavigate();

  const showMenu = (m: number) => {
    navigate(`/menu/${m}`);
  };

  const handleBackgroundColor = (c: string) => {
    setBackgroundColor(c);
  };

  const categoryHtml = categories.categories.map((c) => {
    return (
      <div key={c.id}>
        <ButtonFade
          margin="0px px"
          padding="10px 40px"
          fontSize="24px"
          bgcolor={backgroundColor === c.name ? BLUE : CHAMPAGNE}
          onClick={() => {
            showMenu(c.id);
            handleBackgroundColor(c.name);
          }}
        >
          {c.name}
        </ButtonFade>
      </div>
    );
  });

  return <ButtonWrapper>{categoryHtml}</ButtonWrapper>;
};
