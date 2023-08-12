import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { IConsumptionProps } from "views/Consumption/types";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IAppParams = {
  Calm: undefined;
  Consumption: IConsumptionProps;
  Feeding: undefined;
  Exercise: undefined;
  Landing: undefined;
  Panic: undefined;
  Profile: undefined;
  Hydration: undefined;
};

type TAppViewProps<T extends keyof IAppParams> = NativeStackScreenProps<
  IAppParams,
  T
>;

export type { IAppParams, TAppViewProps };
