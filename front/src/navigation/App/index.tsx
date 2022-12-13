import type {
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Header } from "components/Header";
import { Excercise } from "views/Excercise";
import { Feeding } from "views/Feeding";
import { Landing } from "views/Landing";

import type { IAppParams } from "./types";
  
const { Navigator, Group, Screen } = createNativeStackNavigator<IAppParams>();

const screenOptions: NativeStackNavigationOptions = {
  header: Header,
  headerShown: false,
};

const screenModalOptions: NativeStackNavigationOptions = {
  presentation: "transparentModal", 
};

const AppNavigation = (): JSX.Element => {
  return (
    <Navigator initialRouteName={"Landing"} screenOptions={screenOptions}>
      <Screen component={Landing} name={"Landing"} />
      <Screen
        component={Feeding}
        name={"Feeding"}
        options={{ headerShown: true, headerTitle: "Alimentación" }}
      />
      <Group screenOptions={screenModalOptions}>
        <Screen component={Excercise} name={"Excercise"} />
      </Group>
    </Navigator>
  );
};
  
export { AppNavigation };
