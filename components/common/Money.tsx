import { Currency_Enum } from '../../types/generated/graphql';

interface Money {
  value: string;
  currency: Currency_Enum;
}

const formatValue = ({ value, currency }: Money): string => {
  switch (currency) {
    case Currency_Enum.Gbx:
    case Currency_Enum.Gbp: {
      return (
        parseFloat(value) / (currency === Currency_Enum.Gbx ? 100 : 1)
      ).toLocaleString(undefined, {
        style: 'currency',
        currency: 'GBP',
        currencyDisplay: 'narrowSymbol',
      });
    }
    case Currency_Enum.Usd: {
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
