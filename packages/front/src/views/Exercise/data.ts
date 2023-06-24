import type { CarouselProps } from "components/Carousel/types";

const data: CarouselProps["data"] = [
  {
    background: "#FFB186",
    description:
      "Recuerda incluir mínimo 10 minutos de actividad " +
      "física al día. Poco a poco aumenta el tiempo hasta conseguir " +
      "de 25 a 40 minutos diarios.",
    img: "walking",
    title: "Camina"
  },
  {
    background: "#6BC39E",
    description:
      "Haz salidas solo o acompañado con familiares " +
      "o amigos buscando incluir actividad física como caminatas " +
      "o visitas a lugares específicos",
    img: "walkingdog",
    title: "Visita algún lugar"
  },
  {
    background: "#B3A4FF",
    description:
      "Prueba los siguientes ejercicios: " +
      "\n • Levantar brevemente las piernas." +
      "\n • Levantar los brazos a la altura de los hombros",
    img: "stretching",
    title: "Pausa activa"
  }
];

export { data };
