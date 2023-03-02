type StrictUnion<T extends object> = Record<never, never> & T;

export type { StrictUnion };
