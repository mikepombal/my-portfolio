import { Market_Enum_Enum } from '../../types/generated/graphql';

interface Money {
  value: string;
  market: Market_Enum_Enum;
}

const formatValue = ({ value, market }: Money): string => {
  switch (market) {
    case Market_Enum_Enum.Lon: {
      return (parseFloat(value) / 100).toLocaleString(undefined, {
        style: 'currency',
        currency: 'GBP',
        currencyDisplay: 'narrowSymbol',
      });
    }
    case Market_Enum_Enum.Nyse:
    case Market_Enum_Enum.Nasdaq: {
      return parseFloat(value).toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol',
      });
    }
  }
};

const Money: React.FC<Money> = (money) => <span>{formatValue(money)}</span>;

export default Money;
