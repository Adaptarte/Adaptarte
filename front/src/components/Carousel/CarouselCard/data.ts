import { pills, stretching, walking, walkingdog } from "assets/imgs";

import type { ICarouselCardProps } from "./types";

const data: ICarouselCardProps[] = [
  {
    background: "#FFB186",
    description: "Recuerda incluir mínimo 10 minutos de actividad " 
    + "física al día. Poco a poco aumenta el tiempo hasta conseguir "
    + "de 25 a 40 minutos diarios.",
    image: walking,
    title: "Camina",
  },
  {
    background: "#6BC39E",
    description: "Haz salidas solo o acompañado con familiares "
    + "o amigos buscando incluir actividad física como caminatas "
    + "o visitas a lugares específicos",
    image: walkingdog,
    title: "Visita algún lugar",
  },
  {
    description: "fsdfdasdasds",
    image: stretching,
    title: "holax3",
  },
  {
    description: "fsdfdasdasds",
    image: pills,
    title: "holax4",
  },
  {
    description: "fsdfdasdasds",
    image: pills,
    title: "holax5",
  },
  {
    description: "fsdfdasdasds",
    image: pills,
    title: "holax6",
  },
];

export { data };
