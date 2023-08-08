/* eslint-disable react/no-multi-comp */
import type { ParamListBase } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fireEvent, render, screen } from "@testing-library/react-native";

import { Text } from "components/Text";

import { TensionAbnormal } from ".";
import { t } from "./translations";

describe("TensionRecord/Abnormal", () => {
  let onConfirm: jest.Mock;
  const value = "121/81";

  beforeEach(() => {
    onConfirm = jest.fn();
    const { Navigator, Screen } = createNativeStackNavigator<ParamListBase>();
    const Demo = (): JSX.Element => (
      <TensionAbnormal onConfirm={onConfirm} value={value} visible />
    );
    const Panic = (): JSX.Element => <Text>{"Panic"}</Text>;

    render(
      <NavigationContainer>
        <Navigator>
          <Screen component={Demo} name={"Demo"} />
          <Screen component={Panic} name={"Panic"} />
        </Navigator>
      </NavigationContainer>,
    );
  });

  it("Render content", () => {
    expect.assertions(4);

    expect(screen.queryByText(value)).toBeOnTheScreen();
    expect(screen.queryByTestId("icon-exclamation-circle")).toBeOnTheScreen();
    expect(screen.queryByText(t().message)).toBeOnTheScreen();
    expect(screen.queryByText(t().confirm)).toBeOnTheScreen();
  });

  it("Confirm", () => {
    expect.assertions(1);

    fireEvent.press(screen.getByText(t().confirm));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });
});
