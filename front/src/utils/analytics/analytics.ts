import analytics from "@react-native-firebase/analytics";

const RegisterMedicineGA = async () => {
  await analytics().logEvent("register_medicine", {
    event_name: "medicine_registered"
  });
};

const RegisterFoodGA = async () => {
  await analytics().logEvent("register_food", {
    event_name: "food_registered"
  });
};

const RegisterSignal = () => {
  analytics().logEvent("register_signal", {
    event_name: "signal_registered"
  });
};

export { RegisterMedicineGA, RegisterFoodGA, RegisterSignal };
