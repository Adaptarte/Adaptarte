import type { IFood } from "utils/food/types";

type IConsumptionProps = Partial<Pick<IFood, "type">>;

export type { IConsumptionProps };
