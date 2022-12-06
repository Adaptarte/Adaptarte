import type {
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Header } from "components/Header";
import { Feeding } from "views/Feeding";
import { Landing } from "views/Landing";

import type { IAppParams } from "./types";
  
const { Navigator, Screen } = createNativeStackNavigator<IAppParams>();

const screenOptions: NativeStackNavigationOptions = {
  header: Header,
  headerShown: true,
};

const AppNavigation = (): JSX.Element => {
  return (
    <Navigator initialRouteName={"Landing"} screenOptions={screenOptions}>
      <Screen component={Landing} name={"Landing"} />
      <Screen
        component={Feeding}
        name={"Feeding"}
        options={{ headerTitle: "Alimentación" }}
      />
    </Navigator>
  );
};
  
export { AppNavigation };
