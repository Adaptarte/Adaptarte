import { imgs } from "assets/imgs";
import type { IFood } from "types/food";

const food: IFood[] = [
  {
    id: 1,
    image: imgs.water,
    name: "Agua",
    type: "liquids"
  },
  {
    id: 2,
    image: imgs.juice,
    name: "Jugo",
    type: "liquids"
  },
  {
    id: 3,
    image: imgs.milk,
    name: "Leche",
    type: "liquids"
  }
];

export { food };
