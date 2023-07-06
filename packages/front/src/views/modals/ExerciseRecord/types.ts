import type { ModalBaseProps } from "components/Modal/types";
import type { DBExercise } from "utils/db/types";

interface ExerciseRecordProps extends ModalBaseProps {
  onSave?: (data: DBExercise) => void;
}

export type { ExerciseRecordProps };
