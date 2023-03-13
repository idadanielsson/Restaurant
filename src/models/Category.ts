export interface ICategory {
  id: number;
  name: string;
}

export interface ICategories {
  categories: ICategory[];
}

export const categories: ICategories = {
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
      name: "Drinks & wine",
    },
  ],
};
