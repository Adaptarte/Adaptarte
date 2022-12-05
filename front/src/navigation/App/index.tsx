import type {
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Header } from "components/Header";
import { Landing } from "views/Landing";

import type { IAppParams } from "./types";
  
const { Navigator, Screen } = createNativeStackNavigator<IAppParams>();

const screenOptions: NativeStackNavigationOptions = {
  header: Header,
  headerShown: true,
};

const AppNavigation = (): JSX.Element => {
  return (
    <Navigator initialRouteName={"Landing"}>
      <Screen component={Landing} name={"Landing"} options={screenOptions} />
    </Navigator>
  );
};
  
export { AppNavigation };
