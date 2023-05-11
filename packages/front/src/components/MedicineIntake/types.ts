import type { ModalProps } from "components/Modal/types";
import type { SchemaType } from "utils/db/realm/types";

interface MedicineIntakeProps
  extends Pick<ModalProps, "setVisible" | "visible"> {
  recipe: SchemaType<"MedicineRecipe">;
}

export type { MedicineIntakeProps };
