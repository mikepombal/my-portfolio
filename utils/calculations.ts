import { Activity_Enum_Enum } from '../types/generated/graphql';
import { Activity } from '../types/common';

export const splitValue = (value: number, quantity: number): number[] => {
  const floor = Math.floor(value / quantity);
  return new Array(quantity)
    .fill(floor)
    .reduce<{ list: number[]; toAlocate: number }>(
      (acc, n) => ({
        list: [...acc.list, acc.toAlocate > 0 ? n + 1 : n],
        toAlocate: Math.max(0, acc.toAlocate - 1),
      }),
      { list: [], toAlocate: value - floor * quantity }
    ).list;
};

export const calculateDividendsPerShare = (
  activities: Activity,
  length: number
): number[][] => {
  return activities.reduce<number[][]>((acc, a) => {
    if (a.type !== Activity_Enum_Enum.Div) {
      return acc;
    }
    const split = splitValue(a.totalValue, a.quantity);
    return acc.map((d, i) => (i >= split.length ? d : [...d, split[i]])); // NEED TO CONSIDER QUANTITY
  }, new Array(length).fill([]));
};

export const calculateAverage = (holdings: number[]): number =>
  holdings.length
    ? holdings.map((x) => x * 100).reduce((acc, v) => acc + v, 0) /
      (holdings.length * 100)
    : 0;

export const sumDividends = (activities: Activity): number =>
  activities.reduce(
    (acc, a) => (a.type === Activity_Enum_Enum.Div ? acc + a.totalValue : acc),
    0
  );
