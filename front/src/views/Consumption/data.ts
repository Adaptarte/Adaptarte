import { imgs } from "assets/imgs";
import type { IFood } from "types/food";

const liquids: IFood[] = [
  {
    category: "liquids",
    image: imgs.water,
    name: "Agua"
  },
  {
    category: "liquids",
    image: imgs.juice,
    name: "Jugo"
  },
  {
    category: "liquids",
    image: imgs.milk,
    name: "Leche"
  }
];

export { liquids };
