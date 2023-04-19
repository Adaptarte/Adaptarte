import type { Notification } from "@notifee/react-native";
import Notifee, { TriggerType } from "@notifee/react-native";

import { dateToString } from "utils/date";
import type { DBMedicineIntake } from "utils/db/types";
import { getRecipeById } from "utils/medicine";

const addNotification = (
  channelId: "engagement" | "reminder",
  time: number,
  data: Pick<Notification, "body" | "id" | "subtitle" | "title">
): void => {
  Notifee.createTriggerNotification(
    {
      ...data,
      android: {
        channelId,
        pressAction: {
          id: "default"
        }
      }
    },
    {
      timestamp: Math.max(Date.now() + 1e3, time),
      type: TriggerType.TIMESTAMP
    }
  ).catch(console.error);
};

const addMedicineNotification = ({ date, recipe }: DBMedicineIntake): void => {
  const time = date.getTime() - 10 * 60e3; // 10 minutes before
  const { id, medicine } = getRecipeById(recipe);
  addNotification("reminder", time, {
    body: dateToString(date),
    id: id.toString(),
    subtitle: medicine,
    title: "Es hora de tu medicina"
  });
};

const addTensionNotification = (date: Date): void => {
  const time = date.getTime() - 10 * 60e3; // 10 minutes before
  addNotification("reminder", time, {
    body: dateToString(date),
    id: "tension",
    title: "Registra tu tensión"
  });
};

const cancelNotification = (id: string): void => {
  Notifee.cancelNotification(id).catch(console.error);
};

const cancelMedicineNotification = (recipe: number): void => {
  cancelNotification(recipe.toString());
};

const cancelTensionNotification = (): void => {
  cancelNotification("tension");
};

export {
  addMedicineNotification,
  addTensionNotification,
  cancelMedicineNotification,
  cancelTensionNotification
};
