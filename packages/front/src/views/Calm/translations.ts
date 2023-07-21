const SPA = {
  calm: {
    content: "El ocio y la relajación son importantes para controlar el estrés",
    title: "Calma"
  },
  register: "Registrar actividad",
  stress: {
    consequences:
      "El estrés prolongado pueve provocar deterioro físico y mental",
    title: "El estrés",
    whatIs:
      "Es un estado de tensión de cuerpo y mente ante situaciones adversas."
  }
};

const t = (): typeof SPA => SPA;

export { t };
