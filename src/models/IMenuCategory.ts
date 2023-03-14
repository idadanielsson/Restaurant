export interface IMenuCategory {
  id: number;
  name: string;
}

export interface IMenuCategories {
  categories: IMenuCategory[];
}

export const categories: IMenuCategories = {
  categories: [
    {
      id: 1,
      name: "Food",
    },
    {
      id: 2,
      name: "Brews",
    },
    {
      id: 3,
      name: "Drinks & Wine",
    },
  ],
};
