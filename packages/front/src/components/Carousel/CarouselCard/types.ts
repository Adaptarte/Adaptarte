import type { Dispatch, SetStateAction } from "react";

import type { DBExercise } from "utils/db/types";
import type { ExcerciseProps } from "views/Exercise/types";

interface CarouselCardProps extends ExcerciseProps {
  complete?: boolean;
  setComplete?: Dispatch<SetStateAction<boolean>>;
  onSave: (data: DBExercise) => void;
}

export type { CarouselCardProps };
