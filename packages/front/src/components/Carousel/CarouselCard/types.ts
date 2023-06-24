import type { Dispatch, SetStateAction } from "react";

import type { DBExcercise } from "utils/db/types";
import type { ExcerciseProps } from "views/Exercise/types";

interface CarouselCardProps extends ExcerciseProps {
  complete?: boolean;
  setComplete?: Dispatch<SetStateAction<boolean>>;
  onSave: (data: DBExcercise) => void;
}

export type { CarouselCardProps };
