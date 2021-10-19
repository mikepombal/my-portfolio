import { Activities, Market_Enum } from '../types/generated/graphql';
export interface User {
  username: string;
  token: string;
  graphql?: string;
  isLoggedIn: boolean;
}

export type Activity = Array<
  Pick<
    Activities,
    'market' | 'ticket' | 'type' | 'quantity' | 'totalValue' | 'date'
  >
>;

export type Activity2 = {
  id: number;
  ticket: Activities['ticket'];
  market: Market_Enum;
  type: Activities['type'];
  date: string;
  quantity: number;
  totalValue: number;
};
