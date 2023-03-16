export interface IMenu {
  name: string;
  categoryId: number;
  description: string;
  price: string;
  id: number;
}

export const menus: IMenu[] = [
  {
    name: "Caprese",
    categoryId: 1,
    description:
      "Sallad med tomatskivor, mozzarella, färsk basilika, toppat med balsamvinäger och vår originaldressing.",
    price: "159:-",
    id: 2,
  },
  {
    name: "Spaghetti pomodoro",
    categoryId: 1,
    description:
      "Tillagas med pasta, olivolja, färska tomater, basilika och olika andra färska ingredienser.",
    price: "165:-",
    id: 1,
  },
  {
    name: "Shrimp risotto",
    categoryId: 1,
    description:
      "krämigt arborioris långsamt tillagat med räkor, sparris och tomtato.",
    price: "179:-",
    id: 2,
  },
  {
    name: "Pollo alla romana",
    categoryId: 1,
    description:
      "kycklingbröst med vitlök, rosmarin och broccoli serveras med potatismos",
    price: "239:-",
    id: 2,
  },

  {
    name: "Poppels Bryggeri",
    categoryId: 2,
    description:
      "Fruktig smak med inslag av passionsfrukt, mango, ananas, honung och örter.",
    price: "65:-",
    id: 3,
  },
  {
    name: "Gotlands Bryggeri",
    categoryId: 2,
    description:
      "Humlearomatisk smak med tydlig beska, inslag av apelsinskal, honung, örter och smörkola.",
    price: "75:-",
    id: 4,
  },
  {
    name: "Brooklyn",
    categoryId: 2,
    description:
      "Humlearomatisk, fruktig smak med tydlig beska, inslag av mango, apelsinmarmelad, honung och grapefrukt.",
    price: "75:-",
    id: 4,
  },
  {
    name: "Thornbridge",
    categoryId: 2,
    description:
      "Humlearomatisk smak med tydlig beska, inslag av tallkåda, tropisk frukt, sirapslimpa, örter och grapefrukt.",
    price: "65:-",
    id: 4,
  },

  {
    name: "Negroni",
    categoryId: 3,
    description:
      "En cocktail, gjord på en del gin, en del röd Vermouth, och en del Campari, garnerad med apelsinskal.",
    price: "125:-",
    id: 6,
  },
  {
    name: "Espresso Martini",
    categoryId: 3,
    description:
      "Pigga upp med en smakfull kaffedrink. Espresso, vodka och kahlua sätter smakerna i den här eleganta drinken.",
    price: "135:-",
    id: 6,
  },
  {
    name: "Piemonte Barbera",
    categoryId: 3,
    description: "Italien - Rött vin, fruktigt och smakrikt",
    price: "165/870:-",
    id: 6,
  },
  {
    name: "Nebbiolo d'Alba",
    categoryId: 3,
    description: "Italien - Rött vin, stramt och nyanserat.",
    price: "175/990:-",
    id: 6,
  },
];
