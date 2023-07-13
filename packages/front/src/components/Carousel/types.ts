import type { Dispatch, SetStateAction } from "react";

import type { DBExercise } from "utils/db/types";
import type { ExerciseProps } from "views/Exercise/types";

interface CarouselProps {
  check: boolean;
  data: ExerciseProps[];
  onSave: (data: DBExercise) => void;
  setComplete?: Dispatch<SetStateAction<boolean>>;
}

export type { CarouselProps };
