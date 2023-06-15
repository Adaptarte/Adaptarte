import type { ModalProps } from "components/Modal/types";
import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

interface MedicineIntakeProps
  extends Pick<ModalProps, "setVisible" | "visible"> {
  recipe: DBDoc<DBMedicineRecipe>;
  onSave: (data: DBMedicineIntake) => void;
}

export type { MedicineIntakeProps };
