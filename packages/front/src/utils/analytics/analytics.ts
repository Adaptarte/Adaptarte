import analytics from "@react-native-firebase/analytics";

const registerExercise = async (): Promise<void> => {
  await analytics().logEvent("register_exercise", {
    eventName: "exercise_registered",
  });
};

const registerFoodGA = async (): Promise<void> => {
  await analytics().logEvent("register_food", {
    eventName: "food_registered",
  });
};

const registerMedicineGA = async (): Promise<void> => {
  await analytics().logEvent("register_medicine", {
    eventName: "medicine_registered",
  });
};

const registerSignal = async (): Promise<void> => {
  await analytics().logEvent("register_signal", {
    eventName: "signal_registered",
  });
};

export { registerFoodGA, registerMedicineGA, registerSignal, registerExercise };
