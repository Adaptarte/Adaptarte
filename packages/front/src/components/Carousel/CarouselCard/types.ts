import type { Dispatch, SetStateAction } from "react";

import type { DBExercise } from "utils/db/types";
import type { ExerciseProps } from "views/Exercise/types";

interface CarouselCardProps extends ExerciseProps {
  complete?: boolean;
  setComplete?: Dispatch<SetStateAction<boolean>>;
  onSave: (data: DBExercise) => void;
}

export type { CarouselCardProps };
