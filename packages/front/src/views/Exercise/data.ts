import type { CarouselProps } from "components/Carousel/types";

const data: CarouselProps["data"] = [
  {
    background: "#FFB186",
    description:
      "Puedes caminar por la casa durante los momentos libres, llamadas " +
      "telefónicas u otras actividades. También puedes usar las escaleras en " +
      "lugar del ascensor",
    img: "walking",
    title: "Camina",
  },
  {
    background: "#6BC39E",
    description:
      "Haz salidas solo o acompañado con familiares " +
      "o amigos buscando incluir actividad física como caminatas " +
      "o visitas a lugares específicos",
    img: "walkingdog",
    title: "Visita algún lugar",
  },
  {
    background: "#B3A4FF",
    description:
      "Si permanece sentado, haga 3 minutos de actividad leve cada media hora" +
      "\n • Levantar brevemente las piernas." +
      "\n • Levantar los brazos a la altura de los hombros",
    img: "stretching",
    title: "Pausa activa",
  },
];

export { data };
