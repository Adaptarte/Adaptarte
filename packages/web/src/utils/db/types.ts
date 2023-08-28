import type { QueryConstraint } from "firebase/firestore";

const allDiseases = [
  "diabetesMellitus",
  "epoc",
  "heartFailure",
  "hypertension",
] as const;

type DBDisease = (typeof allDiseases)[number];

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
  diseases?: Record<DBDisease, boolean>;
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

interface DBOperations {
  addDoc: <T extends keyof DBUserCollections>(
    collection: T,
    data: DBUserCollections[T],
  ) => void;
  delDoc: (collection: keyof DBUserCollections, doc: string) => void;
  getDocs: <T extends keyof DBUserCollections>(
    collection: T,
    filter?: QueryConstraint[],
  ) => DBDoc<DBUserCollections[T]>[];
  getUser: () => DBDoc<DBUser> | null;
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
  Weight: DBWeight;
}

interface DBUserData extends DBDoc<DBUser> {
  collections: {
    [K in keyof DBUserCollections]: DBDoc<DBUserCollections[K]>[];
  };
}

export type {
  DBCalmActivity,
  DBDisease,
  DBDoc,
  DBEmergencyContacts,
  DBExercise,
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBOperations,
  DBTension,
  DBUser,
  DBUserCollections,
  DBUserData,
  DBWeight,
};
export { allDiseases };
