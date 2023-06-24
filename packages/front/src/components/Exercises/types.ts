import type { ModalBaseProps } from "components/Modal/types";
import type { DBExercise } from "utils/db/types";

interface ExercisesProps extends ModalBaseProps {
  onSave: (data: DBExercise) => void;
}

export type { ExercisesProps };
