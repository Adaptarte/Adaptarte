import { NavigationContainer } from "@react-navigation/native";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Header } from "components/Header";
import { colors } from "styles";
import { Calm } from "views/Calm";
import { Consumption } from "views/Consumption";
import { Exercise } from "views/Exercise";
import { Feeding } from "views/Feeding";
import { Hydration } from "views/Hydration";
import { Landing } from "views/Landing";
import { Panic } from "views/Panic";
import { Profile } from "views/Profile";

import type { IAppParams } from "./types";

const { Navigator, Group, Screen } = createNativeStackNavigator<IAppParams>();

const screenOptions: NativeStackNavigationOptions = {
  header: Header,
  headerShown: true,
};

const AppNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={"Landing"} screenOptions={screenOptions}>
        <Screen component={Landing} name={"Landing"} />
        <Screen component={Calm} name={"Calm"} />
        <Screen component={Hydration} name={"Hydration"} />
        <Screen
          component={Feeding}
          name={"Feeding"}
          options={{ title: "Alimentación" }}
        />
        <Screen
          component={Panic}
          name={"Panic"}
          options={{ title: "Mantenga la calma" }}
        />
        <Group
          screenOptions={{ headerStyle: { backgroundColor: colors.LIGHT } }}
        >
          <Screen component={Profile} name={"Profile"} />
        </Group>
        <Group screenOptions={{ headerShown: false }}>
          <Screen component={Consumption} name={"Consumption"} />
          <Screen
            component={Exercise}
            name={"Exercise"}
            options={{ presentation: "transparentModal" }}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export { AppNavigation };
