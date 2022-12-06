const SPA = {
  carbs: {
    description: "Incluye 4 porciones de carbohidratos, como almidones, " +
      "o tubérculos",
    title: "Carbohidratos",
  },
  dairy: {
    description: "Incluye en tu dieta 2 porciones de lácteos",
    title: "Lácteos",
  },
  fruitsAndVegetables: {
    description: "Consume 4 porciones de frutas y verduras. Una porción es " +
      "el equivalente a una fruta completa como la naranja",
    title: "Frutas y verduras",
  },
  liquids: {
    description: "Recuerda consumir tus 5 porciones de líquidos",
    title: "Líquidos",
  },
};

const t = (): typeof SPA => SPA;

export { t };
