import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "activities" */
export type Activities = {
  __typename?: 'activities';
  date: Scalars['timestamptz'];
  id: Scalars['Int'];
  market: Scalars['String'];
  quantity: Scalars['numeric'];
  ticket: Scalars['String'];
  totalValue: Scalars['numeric'];
  type: Activity_Enum;
};

/** aggregated selection of "activities" */
export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_Fields = {
  __typename?: 'activities_aggregate_fields';
  avg?: Maybe<Activities_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activities_Max_Fields>;
  min?: Maybe<Activities_Min_Fields>;
  stddev?: Maybe<Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Activities_Sum_Fields>;
  var_pop?: Maybe<Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Activities_Var_Samp_Fields>;
  variance?: Maybe<Activities_Variance_Fields>;
};


/** aggregate fields of "activities" */
export type Activities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  avg?: Maybe<Activities_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Activities_Max_Order_By>;
  min?: Maybe<Activities_Min_Order_By>;
  stddev?: Maybe<Activities_Stddev_Order_By>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Order_By>;
  sum?: Maybe<Activities_Sum_Order_By>;
  var_pop?: Maybe<Activities_Var_Pop_Order_By>;
  var_samp?: Maybe<Activities_Var_Samp_Order_By>;
  variance?: Maybe<Activities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** aggregate avg on columns */
export type Activities_Avg_Fields = {
  __typename?: 'activities_avg_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  _not?: Maybe<Activities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  market?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  ticket?: Maybe<String_Comparison_Exp>;
  totalValue?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Activity_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint */
  ActivitiesPkey = 'activities_pkey'
}

/** input type for incrementing integer column in table "activities" */
export type Activities_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  totalValue?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['numeric']>;
  type?: Maybe<Activity_Enum>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** on conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns: Array<Activities_Update_Column>;
  where?: Maybe<Activities_Bool_Exp>;
};

/** ordering options when selecting data from "activities" */
export type Activities_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "activities" */
export type Activities_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Market = 'market',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TotalValue = 'totalValue',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['numeric']>;
  type?: Maybe<Activity_Enum>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  totalValue?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** update columns of table "activities" */
export enum Activities_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Market = 'market',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TotalValue = 'totalValue',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  totalValue?: Maybe<Order_By>;
};

/** columns and relationships of "activity" */
export type Activity = {
  __typename?: 'activity';
  type: Scalars['String'];
};

/** aggregated selection of "activity" */
export type Activity_Aggregate = {
  __typename?: 'activity_aggregate';
  aggregate?: Maybe<Activity_Aggregate_Fields>;
  nodes: Array<Activity>;
};

/** aggregate fields of "activity" */
export type Activity_Aggregate_Fields = {
  __typename?: 'activity_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activity_Max_Fields>;
  min?: Maybe<Activity_Min_Fields>;
};


/** aggregate fields of "activity" */
export type Activity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activity" */
export type Activity_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Activity_Max_Order_By>;
  min?: Maybe<Activity_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activity" */
export type Activity_Arr_Rel_Insert_Input = {
  data: Array<Activity_Insert_Input>;
  on_conflict?: Maybe<Activity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type Activity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activity_Bool_Exp>>>;
  _not?: Maybe<Activity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activity_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity" */
export enum Activity_Constraint {
  /** unique or primary key constraint */
  ActivityEnumPkey = 'activity_enum_pkey'
}

export enum Activity_Enum {
  Buy = 'BUY',
  Div = 'DIV',
  Sell = 'SELL'
}

/** expression to compare columns of type activity_enum. All fields are combined with logical 'AND'. */
export type Activity_Enum_Comparison_Exp = {
  _eq?: Maybe<Activity_Enum>;
  _in?: Maybe<Array<Activity_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Activity_Enum>;
  _nin?: Maybe<Array<Activity_Enum>>;
};

/** input type for inserting data into table "activity" */
export type Activity_Insert_Input = {
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Max_Fields = {
  __typename?: 'activity_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "activity" */
export type Activity_Max_Order_By = {
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activity_Min_Fields = {
  __typename?: 'activity_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "activity" */
export type Activity_Min_Order_By = {
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "activity" */
export type Activity_Mutation_Response = {
  __typename?: 'activity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activity>;
};

/** input type for inserting object relation for remote table "activity" */
export type Activity_Obj_Rel_Insert_Input = {
  data: Activity_Insert_Input;
  on_conflict?: Maybe<Activity_On_Conflict>;
};

/** on conflict condition type for table "activity" */
export type Activity_On_Conflict = {
  constraint: Activity_Constraint;
  update_columns: Array<Activity_Update_Column>;
  where?: Maybe<Activity_Bool_Exp>;
};

/** ordering options when selecting data from "activity" */
export type Activity_Order_By = {
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "activity" */
export type Activity_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "activity" */
export enum Activity_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "activity" */
export type Activity_Set_Input = {
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "activity" */
export enum Activity_Update_Column {
  /** column name */
  Type = 'type'
}

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'currency';
  currency: Scalars['String'];
  description: Scalars['String'];
};

/** aggregated selection of "currency" */
export type Currency_Aggregate = {
  __typename?: 'currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'currency_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
};


/** aggregate fields of "currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "currency" */
export type Currency_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Currency_Max_Order_By>;
  min?: Maybe<Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "currency" */
export type Currency_Arr_Rel_Insert_Input = {
  data: Array<Currency_Insert_Input>;
  on_conflict?: Maybe<Currency_On_Conflict>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Currency_Bool_Exp>>>;
  _not?: Maybe<Currency_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Currency_Bool_Exp>>>;
  currency?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "currency" */
export enum Currency_Constraint {
  /** unique or primary key constraint */
  CurrencyPkey = 'currency_pkey'
}

export enum Currency_Enum {
  /** British Pound Sterling */
  Gbp = 'GBP',
  /** British Penny Sterling */
  Gbx = 'GBX',
  /** US Dollar */
  Usd = 'USD'
}

/** expression to compare columns of type currency_enum. All fields are combined with logical 'AND'. */
export type Currency_Enum_Comparison_Exp = {
  _eq?: Maybe<Currency_Enum>;
  _in?: Maybe<Array<Currency_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Currency_Enum>;
  _nin?: Maybe<Array<Currency_Enum>>;
};

/** input type for inserting data into table "currency" */
export type Currency_Insert_Input = {
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'currency_max_fields';
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "currency" */
export type Currency_Max_Order_By = {
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'currency_min_fields';
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "currency" */
export type Currency_Min_Order_By = {
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** response of any mutation on the table "currency" */
export type Currency_Mutation_Response = {
  __typename?: 'currency_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Currency>;
};

/** input type for inserting object relation for remote table "currency" */
export type Currency_Obj_Rel_Insert_Input = {
  data: Currency_Insert_Input;
  on_conflict?: Maybe<Currency_On_Conflict>;
};

/** on conflict condition type for table "currency" */
export type Currency_On_Conflict = {
  constraint: Currency_Constraint;
  update_columns: Array<Currency_Update_Column>;
  where?: Maybe<Currency_Bool_Exp>;
};

/** ordering options when selecting data from "currency" */
export type Currency_Order_By = {
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** primary key columns input for table: "currency" */
export type Currency_Pk_Columns_Input = {
  currency: Scalars['String'];
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "currency" */
export type Currency_Set_Input = {
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** update columns of table "currency" */
export enum Currency_Update_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description'
}

/**
 * for log purpose
 *
 *
 * columns and relationships of "log"
 *
 */
export type Log = {
  __typename?: 'log';
  contract: Scalars['String'];
  detail: Scalars['String'];
  id: Scalars['Int'];
  timestamp: Scalars['timestamptz'];
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  __typename?: 'log_aggregate';
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  __typename?: 'log_aggregate_fields';
  avg?: Maybe<Log_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
  stddev?: Maybe<Log_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Sum_Fields>;
  var_pop?: Maybe<Log_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Var_Samp_Fields>;
  variance?: Maybe<Log_Variance_Fields>;
};


/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Log_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "log" */
export type Log_Aggregate_Order_By = {
  avg?: Maybe<Log_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Log_Max_Order_By>;
  min?: Maybe<Log_Min_Order_By>;
  stddev?: Maybe<Log_Stddev_Order_By>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Order_By>;
  sum?: Maybe<Log_Sum_Order_By>;
  var_pop?: Maybe<Log_Var_Pop_Order_By>;
  var_samp?: Maybe<Log_Var_Samp_Order_By>;
  variance?: Maybe<Log_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "log" */
export type Log_Arr_Rel_Insert_Input = {
  data: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** aggregate avg on columns */
export type Log_Avg_Fields = {
  __typename?: 'log_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "log" */
export type Log_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  _not?: Maybe<Log_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  contract?: Maybe<String_Comparison_Exp>;
  detail?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export enum Log_Constraint {
  /** unique or primary key constraint */
  LogPkey = 'log_pkey'
}

/** input type for incrementing integer column in table "log" */
export type Log_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  contract?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  __typename?: 'log_max_fields';
  contract?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "log" */
export type Log_Max_Order_By = {
  contract?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  __typename?: 'log_min_fields';
  contract?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "log" */
export type Log_Min_Order_By = {
  contract?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  __typename?: 'log_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Log>;
};

/** input type for inserting object relation for remote table "log" */
export type Log_Obj_Rel_Insert_Input = {
  data: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** on conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns: Array<Log_Update_Column>;
  where?: Maybe<Log_Bool_Exp>;
};

/** ordering options when selecting data from "log" */
export type Log_Order_By = {
  contract?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "log" */
export type Log_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "log" */
export enum Log_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  contract?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Log_Stddev_Fields = {
  __typename?: 'log_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "log" */
export type Log_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Log_Stddev_Pop_Fields = {
  __typename?: 'log_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "log" */
export type Log_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Log_Stddev_Samp_Fields = {
  __typename?: 'log_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "log" */
export type Log_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Log_Sum_Fields = {
  __typename?: 'log_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "log" */
export type Log_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "log" */
export enum Log_Update_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate var_pop on columns */
export type Log_Var_Pop_Fields = {
  __typename?: 'log_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "log" */
export type Log_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Log_Var_Samp_Fields = {
  __typename?: 'log_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "log" */
export type Log_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Log_Variance_Fields = {
  __typename?: 'log_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "log" */
export type Log_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "market" */
export type Market = {
  __typename?: 'market';
  market: Scalars['String'];
};

/** aggregated selection of "market" */
export type Market_Aggregate = {
  __typename?: 'market_aggregate';
  aggregate?: Maybe<Market_Aggregate_Fields>;
  nodes: Array<Market>;
};

/** aggregate fields of "market" */
export type Market_Aggregate_Fields = {
  __typename?: 'market_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Market_Max_Fields>;
  min?: Maybe<Market_Min_Fields>;
};


/** aggregate fields of "market" */
export type Market_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Market_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "market" */
export type Market_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Market_Max_Order_By>;
  min?: Maybe<Market_Min_Order_By>;
};

/** input type for inserting array relation for remote table "market" */
export type Market_Arr_Rel_Insert_Input = {
  data: Array<Market_Insert_Input>;
  on_conflict?: Maybe<Market_On_Conflict>;
};

/** Boolean expression to filter rows from the table "market". All fields are combined with a logical 'AND'. */
export type Market_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Market_Bool_Exp>>>;
  _not?: Maybe<Market_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Market_Bool_Exp>>>;
  market?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "market" */
export enum Market_Constraint {
  /** unique or primary key constraint */
  MarketEnumPkey = 'market_enum_pkey'
}

export enum Market_Enum {
  Lon = 'LON',
  Nasdaq = 'NASDAQ',
  Nyse = 'NYSE'
}

/** expression to compare columns of type market_enum. All fields are combined with logical 'AND'. */
export type Market_Enum_Comparison_Exp = {
  _eq?: Maybe<Market_Enum>;
  _in?: Maybe<Array<Market_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Market_Enum>;
  _nin?: Maybe<Array<Market_Enum>>;
};

/** input type for inserting data into table "market" */
export type Market_Insert_Input = {
  market?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Market_Max_Fields = {
  __typename?: 'market_max_fields';
  market?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "market" */
export type Market_Max_Order_By = {
  market?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Market_Min_Fields = {
  __typename?: 'market_min_fields';
  market?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "market" */
export type Market_Min_Order_By = {
  market?: Maybe<Order_By>;
};

/** response of any mutation on the table "market" */
export type Market_Mutation_Response = {
  __typename?: 'market_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Market>;
};

/** input type for inserting object relation for remote table "market" */
export type Market_Obj_Rel_Insert_Input = {
  data: Market_Insert_Input;
  on_conflict?: Maybe<Market_On_Conflict>;
};

/** on conflict condition type for table "market" */
export type Market_On_Conflict = {
  constraint: Market_Constraint;
  update_columns: Array<Market_Update_Column>;
  where?: Maybe<Market_Bool_Exp>;
};

/** ordering options when selecting data from "market" */
export type Market_Order_By = {
  market?: Maybe<Order_By>;
};

/** primary key columns input for table: "market" */
export type Market_Pk_Columns_Input = {
  market: Scalars['String'];
};

/** select columns of table "market" */
export enum Market_Select_Column {
  /** column name */
  Market = 'market'
}

/** input type for updating data in table "market" */
export type Market_Set_Input = {
  market?: Maybe<Scalars['String']>;
};

/** update columns of table "market" */
export enum Market_Update_Column {
  /** column name */
  Market = 'market'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "activity" */
  delete_activity?: Maybe<Activity_Mutation_Response>;
  /** delete single row from the table: "activity" */
  delete_activity_by_pk?: Maybe<Activity>;
  /** delete data from the table: "currency" */
  delete_currency?: Maybe<Currency_Mutation_Response>;
  /** delete single row from the table: "currency" */
  delete_currency_by_pk?: Maybe<Currency>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "market" */
  delete_market?: Maybe<Market_Mutation_Response>;
  /** delete single row from the table: "market" */
  delete_market_by_pk?: Maybe<Market>;
  /** delete data from the table: "prices_update_due" */
  delete_prices_update_due?: Maybe<Prices_Update_Due_Mutation_Response>;
  /** delete data from the table: "ticket_type" */
  delete_ticket_type?: Maybe<Ticket_Type_Mutation_Response>;
  /** delete single row from the table: "ticket_type" */
  delete_ticket_type_by_pk?: Maybe<Ticket_Type>;
  /** delete data from the table: "tickets" */
  delete_tickets?: Maybe<Tickets_Mutation_Response>;
  /** delete single row from the table: "tickets" */
  delete_tickets_by_pk?: Maybe<Tickets>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<Activity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<Activity>;
  /** insert data into the table: "currency" */
  insert_currency?: Maybe<Currency_Mutation_Response>;
  /** insert a single row into the table: "currency" */
  insert_currency_one?: Maybe<Currency>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "market" */
  insert_market?: Maybe<Market_Mutation_Response>;
  /** insert a single row into the table: "market" */
  insert_market_one?: Maybe<Market>;
  /** insert data into the table: "ticket_type" */
  insert_ticket_type?: Maybe<Ticket_Type_Mutation_Response>;
  /** insert a single row into the table: "ticket_type" */
  insert_ticket_type_one?: Maybe<Ticket_Type>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<Activity_Mutation_Response>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<Activity>;
  /** update data of the table: "currency" */
  update_currency?: Maybe<Currency_Mutation_Response>;
  /** update single row of the table: "currency" */
  update_currency_by_pk?: Maybe<Currency>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update data of the table: "market" */
  update_market?: Maybe<Market_Mutation_Response>;
  /** update single row of the table: "market" */
  update_market_by_pk?: Maybe<Market>;
  /** update data of the table: "ticket_type" */
  update_ticket_type?: Maybe<Ticket_Type_Mutation_Response>;
  /** update single row of the table: "ticket_type" */
  update_ticket_type_by_pk?: Maybe<Ticket_Type>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ActivityArgs = {
  where: Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CurrencyArgs = {
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currency_By_PkArgs = {
  currency: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MarketArgs = {
  where: Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Market_By_PkArgs = {
  market: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Prices_Update_DueArgs = {
  where: Prices_Update_Due_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_TypeArgs = {
  where: Ticket_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  market: Market_Enum;
  ticket: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ActivityArgs = {
  objects: Array<Activity_Insert_Input>;
  on_conflict?: Maybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_OneArgs = {
  object: Activity_Insert_Input;
  on_conflict?: Maybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrencyArgs = {
  objects: Array<Currency_Insert_Input>;
  on_conflict?: Maybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_OneArgs = {
  object: Currency_Insert_Input;
  on_conflict?: Maybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarketArgs = {
  objects: Array<Market_Insert_Input>;
  on_conflict?: Maybe<Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_OneArgs = {
  object: Market_Insert_Input;
  on_conflict?: Maybe<Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_TypeArgs = {
  objects: Array<Ticket_Type_Insert_Input>;
  on_conflict?: Maybe<Ticket_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Type_OneArgs = {
  object: Ticket_Type_Insert_Input;
  on_conflict?: Maybe<Ticket_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketsArgs = {
  objects: Array<Tickets_Insert_Input>;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tickets_OneArgs = {
  object: Tickets_Insert_Input;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ActivityArgs = {
  _set?: Maybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_By_PkArgs = {
  _set?: Maybe<Activity_Set_Input>;
  pk_columns: Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CurrencyArgs = {
  _set?: Maybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_By_PkArgs = {
  _set?: Maybe<Currency_Set_Input>;
  pk_columns: Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MarketArgs = {
  _set?: Maybe<Market_Set_Input>;
  where: Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Market_By_PkArgs = {
  _set?: Maybe<Market_Set_Input>;
  pk_columns: Market_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_TypeArgs = {
  _set?: Maybe<Ticket_Type_Set_Input>;
  where: Ticket_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Type_By_PkArgs = {
  _set?: Maybe<Ticket_Type_Set_Input>;
  pk_columns: Ticket_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TicketsArgs = {
  _set?: Maybe<Tickets_Set_Input>;
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_By_PkArgs = {
  _set?: Maybe<Tickets_Set_Input>;
  pk_columns: Tickets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "prices_update_due" */
export type Prices_Update_Due = {
  __typename?: 'prices_update_due';
  ticket?: Maybe<Scalars['String']>;
};

/** aggregated selection of "prices_update_due" */
export type Prices_Update_Due_Aggregate = {
  __typename?: 'prices_update_due_aggregate';
  aggregate?: Maybe<Prices_Update_Due_Aggregate_Fields>;
  nodes: Array<Prices_Update_Due>;
};

/** aggregate fields of "prices_update_due" */
export type Prices_Update_Due_Aggregate_Fields = {
  __typename?: 'prices_update_due_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Prices_Update_Due_Max_Fields>;
  min?: Maybe<Prices_Update_Due_Min_Fields>;
};


/** aggregate fields of "prices_update_due" */
export type Prices_Update_Due_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prices_Update_Due_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prices_update_due" */
export type Prices_Update_Due_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Prices_Update_Due_Max_Order_By>;
  min?: Maybe<Prices_Update_Due_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "prices_update_due". All fields are combined with a logical 'AND'. */
export type Prices_Update_Due_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Prices_Update_Due_Bool_Exp>>>;
  _not?: Maybe<Prices_Update_Due_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Prices_Update_Due_Bool_Exp>>>;
  ticket?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Prices_Update_Due_Max_Fields = {
  __typename?: 'prices_update_due_max_fields';
  ticket?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "prices_update_due" */
export type Prices_Update_Due_Max_Order_By = {
  ticket?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Prices_Update_Due_Min_Fields = {
  __typename?: 'prices_update_due_min_fields';
  ticket?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "prices_update_due" */
export type Prices_Update_Due_Min_Order_By = {
  ticket?: Maybe<Order_By>;
};

/** response of any mutation on the table "prices_update_due" */
export type Prices_Update_Due_Mutation_Response = {
  __typename?: 'prices_update_due_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Prices_Update_Due>;
};

/** ordering options when selecting data from "prices_update_due" */
export type Prices_Update_Due_Order_By = {
  ticket?: Maybe<Order_By>;
};

/** select columns of table "prices_update_due" */
export enum Prices_Update_Due_Select_Column {
  /** column name */
  Ticket = 'ticket'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  market_aggregate: Market_Aggregate;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "prices_update_due" */
  prices_update_due: Array<Prices_Update_Due>;
  /** fetch aggregated fields from the table: "prices_update_due" */
  prices_update_due_aggregate: Prices_Update_Due_Aggregate;
  /** fetch data from the table: "ticket_type" */
  ticket_type: Array<Ticket_Type>;
  /** fetch aggregated fields from the table: "ticket_type" */
  ticket_type_aggregate: Ticket_Type_Aggregate;
  /** fetch data from the table: "ticket_type" using primary key columns */
  ticket_type_by_pk?: Maybe<Ticket_Type>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootActivityArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_By_PkArgs = {
  type: Scalars['String'];
};


/** query root */
export type Query_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


/** query root */
export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


/** query root */
export type Query_RootCurrency_By_PkArgs = {
  currency: Scalars['String'];
};


/** query root */
export type Query_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** query root */
export type Query_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** query root */
export type Query_RootLog_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMarketArgs = {
  distinct_on?: Maybe<Array<Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Order_By>>;
  where?: Maybe<Market_Bool_Exp>;
};


/** query root */
export type Query_RootMarket_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Order_By>>;
  where?: Maybe<Market_Bool_Exp>;
};


/** query root */
export type Query_RootMarket_By_PkArgs = {
  market: Scalars['String'];
};


/** query root */
export type Query_RootPrices_Update_DueArgs = {
  distinct_on?: Maybe<Array<Prices_Update_Due_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Update_Due_Order_By>>;
  where?: Maybe<Prices_Update_Due_Bool_Exp>;
};


/** query root */
export type Query_RootPrices_Update_Due_AggregateArgs = {
  distinct_on?: Maybe<Array<Prices_Update_Due_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Update_Due_Order_By>>;
  where?: Maybe<Prices_Update_Due_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_TypeArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Order_By>>;
  where?: Maybe<Ticket_Type_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Order_By>>;
  where?: Maybe<Ticket_Type_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** query root */
export type Query_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** query root */
export type Query_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** query root */
export type Query_RootTickets_By_PkArgs = {
  market: Market_Enum;
  ticket: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  username: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  market_aggregate: Market_Aggregate;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "prices_update_due" */
  prices_update_due: Array<Prices_Update_Due>;
  /** fetch aggregated fields from the table: "prices_update_due" */
  prices_update_due_aggregate: Prices_Update_Due_Aggregate;
  /** fetch data from the table: "ticket_type" */
  ticket_type: Array<Ticket_Type>;
  /** fetch aggregated fields from the table: "ticket_type" */
  ticket_type_aggregate: Ticket_Type_Aggregate;
  /** fetch data from the table: "ticket_type" using primary key columns */
  ticket_type_by_pk?: Maybe<Ticket_Type>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootActivityArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_By_PkArgs = {
  type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCurrency_By_PkArgs = {
  currency: Scalars['String'];
};


/** subscription root */
export type Subscription_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLog_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMarketArgs = {
  distinct_on?: Maybe<Array<Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Order_By>>;
  where?: Maybe<Market_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMarket_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Order_By>>;
  where?: Maybe<Market_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMarket_By_PkArgs = {
  market: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPrices_Update_DueArgs = {
  distinct_on?: Maybe<Array<Prices_Update_Due_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Update_Due_Order_By>>;
  where?: Maybe<Prices_Update_Due_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrices_Update_Due_AggregateArgs = {
  distinct_on?: Maybe<Array<Prices_Update_Due_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Update_Due_Order_By>>;
  where?: Maybe<Prices_Update_Due_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_TypeArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Order_By>>;
  where?: Maybe<Ticket_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Order_By>>;
  where?: Maybe<Ticket_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTickets_By_PkArgs = {
  market: Market_Enum;
  ticket: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  username: Scalars['String'];
};

/** columns and relationships of "ticket_type" */
export type Ticket_Type = {
  __typename?: 'ticket_type';
  type: Scalars['String'];
};

/** aggregated selection of "ticket_type" */
export type Ticket_Type_Aggregate = {
  __typename?: 'ticket_type_aggregate';
  aggregate?: Maybe<Ticket_Type_Aggregate_Fields>;
  nodes: Array<Ticket_Type>;
};

/** aggregate fields of "ticket_type" */
export type Ticket_Type_Aggregate_Fields = {
  __typename?: 'ticket_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ticket_Type_Max_Fields>;
  min?: Maybe<Ticket_Type_Min_Fields>;
};


/** aggregate fields of "ticket_type" */
export type Ticket_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ticket_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ticket_type" */
export type Ticket_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Ticket_Type_Max_Order_By>;
  min?: Maybe<Ticket_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ticket_type" */
export type Ticket_Type_Arr_Rel_Insert_Input = {
  data: Array<Ticket_Type_Insert_Input>;
  on_conflict?: Maybe<Ticket_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ticket_type". All fields are combined with a logical 'AND'. */
export type Ticket_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ticket_Type_Bool_Exp>>>;
  _not?: Maybe<Ticket_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ticket_Type_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ticket_type" */
export enum Ticket_Type_Constraint {
  /** unique or primary key constraint */
  TicketTypePkey = 'ticket_type_pkey'
}

export enum Ticket_Type_Enum {
  Div1 = 'div1',
  Div2 = 'div2',
  Mix = 'mix',
  Trading = 'trading'
}

/** expression to compare columns of type ticket_type_enum. All fields are combined with logical 'AND'. */
export type Ticket_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Ticket_Type_Enum>;
  _in?: Maybe<Array<Ticket_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Ticket_Type_Enum>;
  _nin?: Maybe<Array<Ticket_Type_Enum>>;
};

/** input type for inserting data into table "ticket_type" */
export type Ticket_Type_Insert_Input = {
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ticket_Type_Max_Fields = {
  __typename?: 'ticket_type_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ticket_type" */
export type Ticket_Type_Max_Order_By = {
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ticket_Type_Min_Fields = {
  __typename?: 'ticket_type_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ticket_type" */
export type Ticket_Type_Min_Order_By = {
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "ticket_type" */
export type Ticket_Type_Mutation_Response = {
  __typename?: 'ticket_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ticket_Type>;
};

/** input type for inserting object relation for remote table "ticket_type" */
export type Ticket_Type_Obj_Rel_Insert_Input = {
  data: Ticket_Type_Insert_Input;
  on_conflict?: Maybe<Ticket_Type_On_Conflict>;
};

/** on conflict condition type for table "ticket_type" */
export type Ticket_Type_On_Conflict = {
  constraint: Ticket_Type_Constraint;
  update_columns: Array<Ticket_Type_Update_Column>;
  where?: Maybe<Ticket_Type_Bool_Exp>;
};

/** ordering options when selecting data from "ticket_type" */
export type Ticket_Type_Order_By = {
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "ticket_type" */
export type Ticket_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "ticket_type" */
export enum Ticket_Type_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "ticket_type" */
export type Ticket_Type_Set_Input = {
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "ticket_type" */
export enum Ticket_Type_Update_Column {
  /** column name */
  Type = 'type'
}

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  currency: Currency_Enum;
  latest_price?: Maybe<Scalars['String']>;
  market: Market_Enum;
  name: Scalars['String'];
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket: Scalars['String'];
  ticket_type: Ticket_Type_Enum;
  update_price: Scalars['Boolean'];
};

/** aggregated selection of "tickets" */
export type Tickets_Aggregate = {
  __typename?: 'tickets_aggregate';
  aggregate?: Maybe<Tickets_Aggregate_Fields>;
  nodes: Array<Tickets>;
};

/** aggregate fields of "tickets" */
export type Tickets_Aggregate_Fields = {
  __typename?: 'tickets_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tickets_Max_Fields>;
  min?: Maybe<Tickets_Min_Fields>;
};


/** aggregate fields of "tickets" */
export type Tickets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tickets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tickets" */
export type Tickets_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tickets_Max_Order_By>;
  min?: Maybe<Tickets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tickets" */
export type Tickets_Arr_Rel_Insert_Input = {
  data: Array<Tickets_Insert_Input>;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export type Tickets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tickets_Bool_Exp>>>;
  _not?: Maybe<Tickets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tickets_Bool_Exp>>>;
  currency?: Maybe<Currency_Enum_Comparison_Exp>;
  latest_price?: Maybe<String_Comparison_Exp>;
  market?: Maybe<Market_Enum_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  ticket?: Maybe<String_Comparison_Exp>;
  ticket_type?: Maybe<Ticket_Type_Enum_Comparison_Exp>;
  update_price?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint */
  TicketsPkey = 'tickets_pkey'
}

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  currency?: Maybe<Currency_Enum>;
  latest_price?: Maybe<Scalars['String']>;
  market?: Maybe<Market_Enum>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Ticket_Type_Enum>;
  update_price?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  latest_price?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tickets" */
export type Tickets_Max_Order_By = {
  latest_price?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price_timestamp?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  latest_price?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tickets" */
export type Tickets_Min_Order_By = {
  latest_price?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price_timestamp?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
};

/** response of any mutation on the table "tickets" */
export type Tickets_Mutation_Response = {
  __typename?: 'tickets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tickets>;
};

/** input type for inserting object relation for remote table "tickets" */
export type Tickets_Obj_Rel_Insert_Input = {
  data: Tickets_Insert_Input;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};

/** on conflict condition type for table "tickets" */
export type Tickets_On_Conflict = {
  constraint: Tickets_Constraint;
  update_columns: Array<Tickets_Update_Column>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** ordering options when selecting data from "tickets" */
export type Tickets_Order_By = {
  currency?: Maybe<Order_By>;
  latest_price?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price_timestamp?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_type?: Maybe<Order_By>;
  update_price?: Maybe<Order_By>;
};

/** primary key columns input for table: "tickets" */
export type Tickets_Pk_Columns_Input = {
  market: Market_Enum;
  ticket: Scalars['String'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  LatestPrice = 'latest_price',
  /** column name */
  Market = 'market',
  /** column name */
  Name = 'name',
  /** column name */
  PriceTimestamp = 'price_timestamp',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatePrice = 'update_price'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  currency?: Maybe<Currency_Enum>;
  latest_price?: Maybe<Scalars['String']>;
  market?: Maybe<Market_Enum>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Ticket_Type_Enum>;
  update_price?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  LatestPrice = 'latest_price',
  /** column name */
  Market = 'market',
  /** column name */
  Name = 'name',
  /** column name */
  PriceTimestamp = 'price_timestamp',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatePrice = 'update_price'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  username: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type InsertActivityMutationVariables = Exact<{
  date: Scalars['timestamptz'];
  ticket: Scalars['String'];
  market: Scalars['String'];
  totalValue: Scalars['numeric'];
  quantity: Scalars['numeric'];
  type: Activity_Enum;
}>;


export type InsertActivityMutation = { __typename?: 'mutation_root', insert_activities_one?: { __typename?: 'activities', id: number, ticket: string, market: string, type: Activity_Enum, quantity: any, totalValue: any, date: any } | null | undefined };

export type InsertActivitiesMutationVariables = Exact<{
  objects: Array<Activities_Insert_Input> | Activities_Insert_Input;
}>;


export type InsertActivitiesMutation = { __typename?: 'mutation_root', insert_activities?: { __typename?: 'activities_mutation_response', affected_rows: number } | null | undefined };

export type InsertLogMutationVariables = Exact<{
  contract: Scalars['String'];
  detail: Scalars['String'];
}>;


export type InsertLogMutation = { __typename?: 'mutation_root', insert_log_one?: { __typename?: 'log', id: number, timestamp: any, contract: string, detail: string } | null | undefined };

export type InsertTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  name: Scalars['String'];
  ticket_type: Ticket_Type_Enum;
  market: Market_Enum;
  currency: Currency_Enum;
}>;


export type InsertTicketMutation = { __typename?: 'mutation_root', insert_tickets_one?: { __typename?: 'tickets', ticket: string, name: string, ticket_type: Ticket_Type_Enum, market: Market_Enum, currency: Currency_Enum } | null | undefined };

export type UpdateTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  name: Scalars['String'];
  ticket_type: Ticket_Type_Enum;
  market: Market_Enum;
  currency: Currency_Enum;
}>;


export type UpdateTicketMutation = { __typename?: 'mutation_root', update_tickets_by_pk?: { __typename?: 'tickets', ticket: string, market: Market_Enum, name: string, ticket_type: Ticket_Type_Enum, currency: Currency_Enum } | null | undefined };

export type UpdateTicketPriceMutationVariables = Exact<{
  ticket: Scalars['String'];
  market: Market_Enum;
  price: Scalars['String'];
  timestamp: Scalars['timestamptz'];
}>;


export type UpdateTicketPriceMutation = { __typename?: 'mutation_root', update_tickets_by_pk?: { __typename?: 'tickets', ticket: string, market: Market_Enum, latest_price?: string | null | undefined, price_timestamp?: any | null | undefined } | null | undefined };

export type AllActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = { __typename?: 'query_root', activities: Array<{ __typename?: 'activities', id: number, date: any, ticket: string, market: string, type: Activity_Enum, quantity: any, totalValue: any }> };

export type GetActivitiesForTicketQueryVariables = Exact<{
  market: Scalars['String'];
  ticket: Scalars['String'];
}>;


export type GetActivitiesForTicketQuery = { __typename?: 'query_root', activities: Array<{ __typename?: 'activities', market: string, ticket: string, type: Activity_Enum, quantity: any, totalValue: any, date: any }> };

export type AllTicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTicketsQuery = { __typename?: 'query_root', tickets: Array<{ __typename?: 'tickets', name: string, ticket: string, ticket_type: Ticket_Type_Enum, market: Market_Enum, latest_price?: string | null | undefined, currency: Currency_Enum }> };

export type PricesToUpdateQueryVariables = Exact<{ [key: string]: never; }>;


export type PricesToUpdateQuery = { __typename?: 'query_root', prices_update_due: Array<{ __typename?: 'prices_update_due', ticket?: string | null | undefined }> };

export type GetTicketQueryVariables = Exact<{
  market: Market_Enum;
  ticket: Scalars['String'];
}>;


export type GetTicketQuery = { __typename?: 'query_root', tickets_by_pk?: { __typename?: 'tickets', market: Market_Enum, ticket: string, name: string, ticket_type: Ticket_Type_Enum, latest_price?: string | null | undefined, currency: Currency_Enum } | null | undefined };


export const InsertActivityDocument = gql`
    mutation insertActivity($date: timestamptz!, $ticket: String!, $market: String!, $totalValue: numeric!, $quantity: numeric!, $type: activity_enum!) {
  insert_activities_one(
    object: {date: $date, market: $market, quantity: $quantity, ticket: $ticket, totalValue: $totalValue, type: $type}
  ) {
    id
    ticket
    market
    type
    quantity
    totalValue
    date
  }
}
    `;
export type InsertActivityMutationFn = Apollo.MutationFunction<InsertActivityMutation, InsertActivityMutationVariables>;

/**
 * __useInsertActivityMutation__
 *
 * To run a mutation, you first call `useInsertActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertActivityMutation, { data, loading, error }] = useInsertActivityMutation({
 *   variables: {
 *      date: // value for 'date'
 *      ticket: // value for 'ticket'
 *      market: // value for 'market'
 *      totalValue: // value for 'totalValue'
 *      quantity: // value for 'quantity'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useInsertActivityMutation(baseOptions?: Apollo.MutationHookOptions<InsertActivityMutation, InsertActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertActivityMutation, InsertActivityMutationVariables>(InsertActivityDocument, options);
      }
export type InsertActivityMutationHookResult = ReturnType<typeof useInsertActivityMutation>;
export type InsertActivityMutationResult = Apollo.MutationResult<InsertActivityMutation>;
export type InsertActivityMutationOptions = Apollo.BaseMutationOptions<InsertActivityMutation, InsertActivityMutationVariables>;
export const InsertActivitiesDocument = gql`
    mutation insertActivities($objects: [activities_insert_input!]!) {
  insert_activities(objects: $objects) {
    affected_rows
  }
}
    `;
export type InsertActivitiesMutationFn = Apollo.MutationFunction<InsertActivitiesMutation, InsertActivitiesMutationVariables>;

/**
 * __useInsertActivitiesMutation__
 *
 * To run a mutation, you first call `useInsertActivitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertActivitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertActivitiesMutation, { data, loading, error }] = useInsertActivitiesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertActivitiesMutation(baseOptions?: Apollo.MutationHookOptions<InsertActivitiesMutation, InsertActivitiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertActivitiesMutation, InsertActivitiesMutationVariables>(InsertActivitiesDocument, options);
      }
export type InsertActivitiesMutationHookResult = ReturnType<typeof useInsertActivitiesMutation>;
export type InsertActivitiesMutationResult = Apollo.MutationResult<InsertActivitiesMutation>;
export type InsertActivitiesMutationOptions = Apollo.BaseMutationOptions<InsertActivitiesMutation, InsertActivitiesMutationVariables>;
export const InsertLogDocument = gql`
    mutation insertLog($contract: String!, $detail: String!) {
  insert_log_one(object: {contract: $contract, detail: $detail}) {
    id
    timestamp
    contract
    detail
  }
}
    `;
export type InsertLogMutationFn = Apollo.MutationFunction<InsertLogMutation, InsertLogMutationVariables>;

/**
 * __useInsertLogMutation__
 *
 * To run a mutation, you first call `useInsertLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertLogMutation, { data, loading, error }] = useInsertLogMutation({
 *   variables: {
 *      contract: // value for 'contract'
 *      detail: // value for 'detail'
 *   },
 * });
 */
export function useInsertLogMutation(baseOptions?: Apollo.MutationHookOptions<InsertLogMutation, InsertLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertLogMutation, InsertLogMutationVariables>(InsertLogDocument, options);
      }
export type InsertLogMutationHookResult = ReturnType<typeof useInsertLogMutation>;
export type InsertLogMutationResult = Apollo.MutationResult<InsertLogMutation>;
export type InsertLogMutationOptions = Apollo.BaseMutationOptions<InsertLogMutation, InsertLogMutationVariables>;
export const InsertTicketDocument = gql`
    mutation insertTicket($ticket: String!, $name: String!, $ticket_type: ticket_type_enum!, $market: market_enum!, $currency: currency_enum!) {
  insert_tickets_one(
    object: {name: $name, ticket: $ticket, ticket_type: $ticket_type, market: $market, currency: $currency}
  ) {
    ticket
    name
    ticket_type
    market
    currency
  }
}
    `;
export type InsertTicketMutationFn = Apollo.MutationFunction<InsertTicketMutation, InsertTicketMutationVariables>;

/**
 * __useInsertTicketMutation__
 *
 * To run a mutation, you first call `useInsertTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTicketMutation, { data, loading, error }] = useInsertTicketMutation({
 *   variables: {
 *      ticket: // value for 'ticket'
 *      name: // value for 'name'
 *      ticket_type: // value for 'ticket_type'
 *      market: // value for 'market'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useInsertTicketMutation(baseOptions?: Apollo.MutationHookOptions<InsertTicketMutation, InsertTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTicketMutation, InsertTicketMutationVariables>(InsertTicketDocument, options);
      }
export type InsertTicketMutationHookResult = ReturnType<typeof useInsertTicketMutation>;
export type InsertTicketMutationResult = Apollo.MutationResult<InsertTicketMutation>;
export type InsertTicketMutationOptions = Apollo.BaseMutationOptions<InsertTicketMutation, InsertTicketMutationVariables>;
export const UpdateTicketDocument = gql`
    mutation updateTicket($ticket: String!, $name: String!, $ticket_type: ticket_type_enum!, $market: market_enum!, $currency: currency_enum!) {
  update_tickets_by_pk(
    _set: {name: $name, ticket_type: $ticket_type, currency: $currency}
    pk_columns: {ticket: $ticket, market: $market}
  ) {
    ticket
    market
    name
    ticket_type
    currency
  }
}
    `;
export type UpdateTicketMutationFn = Apollo.MutationFunction<UpdateTicketMutation, UpdateTicketMutationVariables>;

/**
 * __useUpdateTicketMutation__
 *
 * To run a mutation, you first call `useUpdateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTicketMutation, { data, loading, error }] = useUpdateTicketMutation({
 *   variables: {
 *      ticket: // value for 'ticket'
 *      name: // value for 'name'
 *      ticket_type: // value for 'ticket_type'
 *      market: // value for 'market'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useUpdateTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTicketMutation, UpdateTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTicketMutation, UpdateTicketMutationVariables>(UpdateTicketDocument, options);
      }
export type UpdateTicketMutationHookResult = ReturnType<typeof useUpdateTicketMutation>;
export type UpdateTicketMutationResult = Apollo.MutationResult<UpdateTicketMutation>;
export type UpdateTicketMutationOptions = Apollo.BaseMutationOptions<UpdateTicketMutation, UpdateTicketMutationVariables>;
export const UpdateTicketPriceDocument = gql`
    mutation updateTicketPrice($ticket: String!, $market: market_enum!, $price: String!, $timestamp: timestamptz!) {
  update_tickets_by_pk(
    _set: {latest_price: $price, price_timestamp: $timestamp}
    pk_columns: {ticket: $ticket, market: $market}
  ) {
    ticket
    market
    latest_price
    price_timestamp
  }
}
    `;
export type UpdateTicketPriceMutationFn = Apollo.MutationFunction<UpdateTicketPriceMutation, UpdateTicketPriceMutationVariables>;

/**
 * __useUpdateTicketPriceMutation__
 *
 * To run a mutation, you first call `useUpdateTicketPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTicketPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTicketPriceMutation, { data, loading, error }] = useUpdateTicketPriceMutation({
 *   variables: {
 *      ticket: // value for 'ticket'
 *      market: // value for 'market'
 *      price: // value for 'price'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useUpdateTicketPriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTicketPriceMutation, UpdateTicketPriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTicketPriceMutation, UpdateTicketPriceMutationVariables>(UpdateTicketPriceDocument, options);
      }
export type UpdateTicketPriceMutationHookResult = ReturnType<typeof useUpdateTicketPriceMutation>;
export type UpdateTicketPriceMutationResult = Apollo.MutationResult<UpdateTicketPriceMutation>;
export type UpdateTicketPriceMutationOptions = Apollo.BaseMutationOptions<UpdateTicketPriceMutation, UpdateTicketPriceMutationVariables>;
export const AllActivitiesDocument = gql`
    query allActivities {
  activities(order_by: {date: desc}, limit: 100) {
    id
    date
    ticket
    market
    type
    quantity
    totalValue
  }
}
    `;

/**
 * __useAllActivitiesQuery__
 *
 * To run a query within a React component, call `useAllActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<AllActivitiesQuery, AllActivitiesQueryVariables>;
export const GetActivitiesForTicketDocument = gql`
    query getActivitiesForTicket($market: String!, $ticket: String!) {
  activities(
    where: {market: {_eq: $market}, ticket: {_eq: $ticket}}
    order_by: {date: asc}
  ) {
    market
    ticket
    type
    quantity
    totalValue
    date
  }
}
    `;

/**
 * __useGetActivitiesForTicketQuery__
 *
 * To run a query within a React component, call `useGetActivitiesForTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesForTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesForTicketQuery({
 *   variables: {
 *      market: // value for 'market'
 *      ticket: // value for 'ticket'
 *   },
 * });
 */
export function useGetActivitiesForTicketQuery(baseOptions: Apollo.QueryHookOptions<GetActivitiesForTicketQuery, GetActivitiesForTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesForTicketQuery, GetActivitiesForTicketQueryVariables>(GetActivitiesForTicketDocument, options);
      }
export function useGetActivitiesForTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesForTicketQuery, GetActivitiesForTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesForTicketQuery, GetActivitiesForTicketQueryVariables>(GetActivitiesForTicketDocument, options);
        }
export type GetActivitiesForTicketQueryHookResult = ReturnType<typeof useGetActivitiesForTicketQuery>;
export type GetActivitiesForTicketLazyQueryHookResult = ReturnType<typeof useGetActivitiesForTicketLazyQuery>;
export type GetActivitiesForTicketQueryResult = Apollo.QueryResult<GetActivitiesForTicketQuery, GetActivitiesForTicketQueryVariables>;
export const AllTicketsDocument = gql`
    query allTickets {
  tickets(order_by: {ticket: asc}) {
    name
    ticket
    ticket_type
    market
    latest_price
    currency
  }
}
    `;

/**
 * __useAllTicketsQuery__
 *
 * To run a query within a React component, call `useAllTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTicketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTicketsQuery(baseOptions?: Apollo.QueryHookOptions<AllTicketsQuery, AllTicketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTicketsQuery, AllTicketsQueryVariables>(AllTicketsDocument, options);
      }
export function useAllTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTicketsQuery, AllTicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTicketsQuery, AllTicketsQueryVariables>(AllTicketsDocument, options);
        }
export type AllTicketsQueryHookResult = ReturnType<typeof useAllTicketsQuery>;
export type AllTicketsLazyQueryHookResult = ReturnType<typeof useAllTicketsLazyQuery>;
export type AllTicketsQueryResult = Apollo.QueryResult<AllTicketsQuery, AllTicketsQueryVariables>;
export const PricesToUpdateDocument = gql`
    query pricesToUpdate {
  prices_update_due {
    ticket
  }
}
    `;

/**
 * __usePricesToUpdateQuery__
 *
 * To run a query within a React component, call `usePricesToUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePricesToUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePricesToUpdateQuery({
 *   variables: {
 *   },
 * });
 */
export function usePricesToUpdateQuery(baseOptions?: Apollo.QueryHookOptions<PricesToUpdateQuery, PricesToUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PricesToUpdateQuery, PricesToUpdateQueryVariables>(PricesToUpdateDocument, options);
      }
export function usePricesToUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PricesToUpdateQuery, PricesToUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PricesToUpdateQuery, PricesToUpdateQueryVariables>(PricesToUpdateDocument, options);
        }
export type PricesToUpdateQueryHookResult = ReturnType<typeof usePricesToUpdateQuery>;
export type PricesToUpdateLazyQueryHookResult = ReturnType<typeof usePricesToUpdateLazyQuery>;
export type PricesToUpdateQueryResult = Apollo.QueryResult<PricesToUpdateQuery, PricesToUpdateQueryVariables>;
export const GetTicketDocument = gql`
    query getTicket($market: market_enum!, $ticket: String!) {
  tickets_by_pk(market: $market, ticket: $ticket) {
    market
    ticket
    name
    ticket_type
    latest_price
    currency
  }
}
    `;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      market: // value for 'market'
 *      ticket: // value for 'ticket'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;