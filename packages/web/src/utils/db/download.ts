import { where } from "firebase/firestore";

import * as db from "utils/firebase/firestore";

import type { DBDoc, DBUserCollections, DBUserData } from "./types";

const getDBData = async (): Promise<DBUserData[]> => {
  const users = await db.getCol("Users", [where("active", "==", true)]);
  return Promise.all(
    users.map(async (user) => {
      const getCol = async <T extends keyof DBUserCollections>(
        collection: T,
      ): Promise<DBDoc<DBUserCollections[T]>[]> => {
        return await db.getCol<DBUserCollections[T]>(
          `Users/${user.id}/${collection}`,
        );
      };
      const collections = {
        CalmActivities: await getCol("CalmActivities"),
        EmergencyContacts: await getCol("EmergencyContacts"),
        Exercises: await getCol("Exercises"),
        FoodIntake: await getCol("FoodIntake"),
        MedicineIntake: await getCol("MedicineIntake"),
        MedicineRecipes: await getCol("MedicineRecipes"),
        Tension: await getCol("Tension"),
        Weight: await getCol("Weight"),
      };
      return Object.assign(user, { collections });
    }),
  );
};

export { getDBData };
