import { configure } from "@testing-library/react-native";

import "@testing-library/jest-native/extend-expect";

// Silence the warning: Animated: `useNativeDriver` is not supported because
// the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn()
  }
}));
jest.mock("@react-native-firebase/analytics", () => () => ({
  logEvent: jest.fn()
}));

// Enable excluding hidden elements from the queries by default
configure({
  defaultIncludeHiddenElements: false
});
