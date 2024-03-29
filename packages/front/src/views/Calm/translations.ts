import type { CalmActivity } from "./types";

const SPA = {
  activities: {
    leisure: "Ocio",
    meditation: "Meditación",
    relaxation: "Relajación",
    snap: "Siesta",
  } as Record<CalmActivity, string>,
  calm: {
    content:
      "El ocio y la relajación son importantes para controlar el " +
      "estrés. Registra las actividades con las que lo controlas:",
    title: "Calma",
  },
  register: "Registrar actividad",
  stress: {
    consequences:
      "El estrés prolongado pueve provocar deterioro físico y mental",
    title: "El estrés",
    whatIs:
      "Es un estado de tensión de cuerpo y mente ante situaciones adversas.",
  },
};

const t = (): typeof SPA => SPA;

export { t };
