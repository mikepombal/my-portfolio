import { Activities } from '../types/generated/graphql';
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
