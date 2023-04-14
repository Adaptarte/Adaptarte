import type { CarouselCardProps } from "./types";

const data: CarouselCardProps[] = [
  {
    background: "#FFB186",
    complete: true,
    description:
      "Recuerda incluir mínimo 10 minutos de actividad " +
      "física al día. Poco a poco aumenta el tiempo hasta conseguir " +
      "de 25 a 40 minutos diarios.",
    img: "walking",
    title: "Camina"
  },
  {
    background: "#6BC39E",
    complete: false,
    description:
      "Haz salidas solo o acompañado con familiares " +
      "o amigos buscando incluir actividad física como caminatas " +
      "o visitas a lugares específicos",
    img: "walkingdog",
    title: "Visita algún lugar"
  },
  {
    background: "#B3A4FF",
    complete: false,
    description:
      "Prueba los siguientes ejercicios: " +
      "\n • Levantar brevemente las piernas." +
      "\n • Levantar los brazos a la altura de los hombros",
    img: "stretching",
    title: "Pausa activa"
  }
];

export { data };
