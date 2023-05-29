import type { ModalProps } from "components/Modal/types";
import type { SchemaType } from "utils/db/realm/types";
import type { DBMedicineIntake } from "utils/db/types";

interface MedicineIntakeProps
  extends Pick<ModalProps, "setVisible" | "visible"> {
  recipe: SchemaType<"MedicineRecipe">;
  onSave: (data: DBMedicineIntake) => void;
}

export type { MedicineIntakeProps };
