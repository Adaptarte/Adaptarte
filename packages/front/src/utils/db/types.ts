import type { QueryFilter } from "./firebase/types";

const allDiseases = [
  "diabetesMellitus",
  "epoc",
  "heartFailure",
  "hypertension",
] as const;
type TDiseases = Record<(typeof allDiseases)[number], boolean>;

interface DBDoc<T extends object> {
  id: string;
  data: T;
}

interface DBUser {
  active?: boolean;
  basicInfo?: {
    id?: string;
    name?: string;
    phone?: string;
  };
  diseases?: TDiseases;
  score?: number;
}

interface DBCalmActivity {
  activity: string;
  date: Date;
}

interface DBEmergencyContacts {
  name: string;
  phone: string;
}

interface DBExercise {
  date: Date;
  exercise: string;
  duration: number;
}

interface DBFoodIntake {
  date: Date;
  food: number;
}

interface DBMedicineIntake {
  date: Date;
  recipe: string;
}

interface DBMedicineRecipe {
  date: Date;
  details?: string;
  interval: number;
  medicine: string;
}

interface DBHydrationIntake {
  amount: number;
  date: Date;
}

interface DBOperations {
  addDoc: <T extends keyof DBUserCollections>(
    collection: T,
    data: DBUserCollections[T],
  ) => void;
  updateDoc: <T extends keyof DBUserCollections>(
    collection: T,
    doc: string,
    data: DBUserCollections[T],
  ) => void;
  delDoc: (collection: keyof DBUserCollections, doc: string) => void;
  getDocs: <T extends keyof DBUserCollections>(
    collection: T,
    filter?: QueryFilter<DBUserCollections[T]>,
  ) => DBDoc<DBUserCollections[T]>[];
  getUser: () => DBUser | undefined;
  updateUser: (data: Partial<DBUser>) => void;
}

interface DBTension {
  date: Date;
  diastolic: number;
  systolic: number;
}

interface DBWeight {
  date: Date;
  kg: number;
}

interface DBUserCollections {
  CalmActivities: DBCalmActivity;
  EmergencyContacts: DBEmergencyContacts;
  Exercises: DBExercise;
  FoodIntake: DBFoodIntake;
  MedicineIntake: DBMedicineIntake;
  MedicineRecipes: DBMedicineRecipe;
  Tension: DBTension;
  Hydration: DBHydrationIntake;
  Weight: DBWeight;
}

type DBUserCollectionName = keyof DBUserCollections;

export type {
  DBCalmActivity,
  DBDoc,
  DBUserCollectionName,
  DBEmergencyContacts,
  DBExercise,
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBHydrationIntake,
  DBOperations,
  DBTension,
  DBUser,
  DBUserCollections,
  DBWeight,
  TDiseases,
};
export { allDiseases };
