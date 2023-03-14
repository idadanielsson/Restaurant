export interface IMenu {
  name: string;
  category: number;
  description: string;
  price: number;
  id: number;
}

export interface IMenus {
  menus: IMenu[];
}

export const menus: IMenus = {
  menus: [
    {
      name: "Pasta",
      category: 1,
      description: "string",
      price: 1,
      id: 1,
    },
    {
      name: "Pizza",
      category: 1,
      description: "string",
      price: 1,
      id: 2,
    },
    {
      name: "Öl 1",
      category: 2,
      description: "string",
      price: 1,
      id: 3,
    },
    {
      name: "Öl 2",
      category: 2,
      description: "string",
      price: 1,
      id: 4,
    },
    {
      name: "Margarita",
      category: 3,
      description: "string",
      price: 1,
      id: 5,
    },
    {
      name: "Espresso martini",
      category: 3,
      description: "string",
      price: 1,
      id: 6,
    },
  ],
};
