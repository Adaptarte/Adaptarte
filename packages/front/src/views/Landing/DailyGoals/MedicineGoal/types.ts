import type { DailyGoalProps } from "components/DailyGoal/types";
import type { DBDoc, DBMedicineRecipe } from "utils/db/types";

interface MedicineGoalProps extends Pick<DailyGoalProps, "date" | "done"> {
  recipe: DBDoc<DBMedicineRecipe>;
}

export type { MedicineGoalProps };
