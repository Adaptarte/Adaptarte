import { NavigationContainer } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { render, screen } from "@testing-library/react-native";
import { useEffect } from "react";

import { Text } from "components/Text";

import { Header } from ".";

type HeaderNavParams = Record<"Dummy" | "Root", undefined>;

const { Navigator, Screen } = createNativeStackNavigator<HeaderNavParams>();
const DummyScreen = ({
  navigation: { navigate },
  route: { name },
}: NativeStackScreenProps<HeaderNavParams>): JSX.Element => {
  useEffect(() => {
    if (name === "Root") {
      navigate("Dummy");
    }
  }, [name, navigate]);

  return <Text>{"Hello"}</Text>;
};

describe("Header", () => {
  it("Render content", () => {
    expect.assertions(1);

    render(
      <NavigationContainer>
        <Navigator screenOptions={{ header: Header }}>
          <Screen component={DummyScreen} name={"Root"} />
          <Screen
            component={DummyScreen}
            name={"Dummy"}
            options={{ title: "Dummy" }}
          />
        </Navigator>
      </NavigationContainer>,
    );

    const title = screen.queryByText("Dummy");
    expect(title).toBeOnTheScreen();
  });
});
