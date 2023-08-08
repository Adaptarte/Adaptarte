import Notifee, { AndroidImportance, EventType } from "@notifee/react-native";

const setupNotifications = (): void => {
  Notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if (type === EventType.ACTION_PRESS && pressAction?.id === "mark-as-read") {
      if (notification?.id !== undefined) {
        await Notifee.cancelNotification(notification.id);
      }
    }
  });

  Notifee.createChannel({
    id: "reminder",
    importance: AndroidImportance.HIGH,
    name: "Alarms & Timer",
    sound: "default",
  }).catch(console.error);

  Notifee.createChannel({
    id: "engagement",
    importance: AndroidImportance.DEFAULT,
    name: "Patient Engagement",
    sound: "default",
  }).catch(console.error);
};

export { setupNotifications };
