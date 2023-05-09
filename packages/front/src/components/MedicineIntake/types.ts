import type { ModalProps } from "components/Modal/types";
import type { IMedicineRecipe } from "types/medicine";

interface MedicineIntakeProps
  extends Pick<ModalProps, "setVisible" | "visible"> {
  recipe: IMedicineRecipe;
}

export type { MedicineIntakeProps };
