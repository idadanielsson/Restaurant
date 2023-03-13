import { createContext } from "react";

export interface IMenu {
  id: number;
  name: string;
  title: string;
  price: number;
}

export interface IMenus {
  menus: IMenu[];
}

export const menus: IMenus = {
  menus: [
    {
      id: 1,
      name: "Food",
      title: "",
      price: 0,
    },
    {
      id: 2,
      name: "Brews test",
      title: "",
      price: 0,
    },
    {
      id: 3,
      name: "Drinks & Wine",
      title: "",
      price: 0,
    },
  ],
};
