import type { DBExercise } from "utils/db/types";
import type { ExerciseProps } from "views/Exercise/types";

interface CarouselProps {
  check: boolean;
  data: ExerciseProps[];
  onSave: (data: DBExercise) => void;
}

export type { CarouselProps };
