import { configure } from "@testing-library/react-native";

import "@testing-library/jest-native/extend-expect";

// Silence the warning: Animated: `useNativeDriver` is not supported because
// the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("@notifee/react-native", () => ({
  cancelNotification: jest.fn(() => Promise.resolve()),
  createTriggerNotification: jest.fn(() => Promise.resolve()),
  getNotificationSettings: jest.fn(() =>
    Promise.resolve({
      authorizationStatus: 0
    })
  ),
  openAlarmPermissionSettings: jest.fn(),
  requestPermission: jest.fn(() =>
    Promise.resolve({
      authorizationStatus: 1
    })
  ),
  TriggerType: {
    TIMESTAMP: 0
  }
}));
jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn()
  }
}));
jest.mock("@react-native-firebase/analytics", () => () => ({
  logEvent: jest.fn()
}));

jest.mock("utils/auth", () => ({
  signInApple: jest.fn(() => Promise.resolve()),
  signInEmailPassword: jest.fn(() => Promise.resolve()),
  signInGoogle: jest.fn(() => Promise.resolve()),
  signUpEmailPassword: jest.fn(() => Promise.resolve()),
  useUser: jest.fn(() => ({
    displayName: "John Doe",
    uid: "U7i",
    photoURL: ""
  }))
}));
jest.mock("utils/db", () => ({
  useDB: jest.fn(() => ({
    addDoc: jest.fn(),
    delDoc: jest.fn(),
    getDocs: jest.fn(() => []),
    getUser: jest.fn(() => ({})),
    updateUser: jest.fn()
  }))
}));

// Enable excluding hidden elements from the queries by default
configure({
  defaultIncludeHiddenElements: false
});
