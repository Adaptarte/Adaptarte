import type { IFood } from "types/food";

type IConsumptionProps = Partial<Pick<IFood, "type">>;

export type { IConsumptionProps };
