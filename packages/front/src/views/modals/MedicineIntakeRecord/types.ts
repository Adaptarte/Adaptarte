import type { ModalBaseProps } from "components/Modal/types";
import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

interface MedicineIntakeProps extends ModalBaseProps {
  recipe: DBDoc<DBMedicineRecipe>;
  onSave: (data: DBMedicineIntake) => void;
}

export type { MedicineIntakeProps };
