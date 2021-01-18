export type PromiseValue<
  PromiseType,
  Otherwise = PromiseType
> = PromiseType extends Promise<infer Value>
  ? { 0: PromiseValue<Value>; 1: Value }[PromiseType extends Promise<unknown>
      ? 0
      : 1]
  : Otherwise;
