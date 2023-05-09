import type { Notification } from "@notifee/react-native";

type INotification = Pick<Notification, "body" | "subtitle"> &
  Required<Pick<Notification, "id" | "title">>;

export type { INotification };
