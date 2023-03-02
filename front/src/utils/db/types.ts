import type { ObjectSchema } from "realm";

import type { IDailyGoal } from "types/dailyGoals";
import type { IFood } from "types/food";
import type { StrictUnion } from "utils/types";

interface SchemaTypes {
  DailyGoal: IDailyGoal;
  Food: IFood;
}

type SchemaType<T extends keyof SchemaTypes> = StrictUnion<SchemaTypes[T]>;

interface Schema extends ObjectSchema {
  name: keyof SchemaTypes;
}

export type { SchemaType, SchemaTypes, Schema };
