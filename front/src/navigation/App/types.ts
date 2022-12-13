import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IAppParams = {
	Feeding: undefined;
	Excercise: undefined;
	Landing: undefined;
};

type TAppViewProps<T extends keyof IAppParams> =
	NativeStackScreenProps<IAppParams, T>;

export type { IAppParams, TAppViewProps };
