import type { Notification } from "@notifee/react-native";
import Notifee, { TriggerType } from "@notifee/react-native";

import type { DBMedicineIntake } from "utils/db/types";
import { getRecipeById } from "utils/medicine";
import { timeToString } from "utils/time";

const addNotification = async (
  channelId: "engagement" | "reminder",
  date: Date,
  data: Pick<Notification, "body" | "id" | "subtitle" | "title">
): Promise<void> => {
  await Notifee.createTriggerNotification(
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
      timestamp: Math.max(Date.now() + 1e3, date.getTime()),
      type: TriggerType.TIMESTAMP
    }
  );
};

const addMedicineNotification = async ({
  date,
  recipe
}: DBMedicineIntake): Promise<void> => {
  const timeBefore = 10 * 60e3; // 10 minutes
  const { id, medicine } = getRecipeById(recipe);
  await addNotification("reminder", new Date(date.getTime() - timeBefore), {
    body: timeToString(date),
    id: id.toString(),
    subtitle: medicine,
    title: "Es hora de tu medicina"
  });
};

export { addMedicineNotification };
