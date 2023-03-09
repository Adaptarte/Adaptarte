import { foodimgs } from "assets/imgs/Foods";
import type { IFood } from "types/food";

const food: IFood[] = [
  {
    id: 1,
    image: foodimgs.bread,
    name: "Pan",
    type: "carbs"
  },
  {
    id: 2,
    image: foodimgs.chocolate,
    name: "Chocolate",
    type: "dairy"
  },
  {
    id: 3,
    image: foodimgs.coffee,
    name: "Café",
    type: "dairy"
  },
  {
    id: 4,
    image: foodimgs.juice,
    name: "Jugo",
    type: "liquids"
  },
  {
    id: 5,
    image: foodimgs.milk,
    name: "Leche",
    type: "dairy"
  },
  {
    id: 6,
    image: foodimgs.pineapple,
    name: "Piña",
    type: "fruitsAndVegetables"
  },
  {
    id: 7,
    image: foodimgs.potato,
    name: "Patata",
    type: "fruitsAndVegetables"
  },
  {
    id: 8,
    image: foodimgs.rice,
    name: "Arroz",
    type: "carbs"
  },
  {
    id: 9,
    image: foodimgs.tea,
    name: "Té",
    type: "liquids"
  },
  {
    id: 10,
    image: foodimgs.water,
    name: "Agua",
    type: "liquids"
  },
  {
    id: 11,
    image: foodimgs.watermelon,
    name: "Sandía",
    type: "fruitsAndVegetables"
  },
  {
    id: 12,
    image: foodimgs.wine,
    name: "Vino",
    type: "liquids"
  },
  {
    id: 13,
    image: foodimgs.yogurt,
    name: "Yogurt",
    type: "dairy"
  }
];

export { food };
