export interface IMenu {
  name: string;
  categoryId: number;
  description: string;
  price: number;
  id: number;
}

export const menus: IMenu[] = [
  {
    name: "Pasta",
    categoryId: 1,
    description: "string",
    price: 1,
    id: 1,
  },
  {
    name: "Pizza",
    categoryId: 1,
    description: "string",
    price: 1,
    id: 2,
  },
  {
    name: "Öl 1",
    categoryId: 2,
    description: "string",
    price: 1,
    id: 3,
  },
  {
    name: "Öl 2",
    categoryId: 2,
    description: "string",
    price: 1,
    id: 4,
  },
  {
    name: "Margarita",
    categoryId: 3,
    description: "string",
    price: 1,
    id: 5,
  },
  {
    name: "Espresso martini",
    categoryId: 3,
    description: "string",
    price: 1,
    id: 6,
  },
];
