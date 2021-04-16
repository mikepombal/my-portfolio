import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  total_value: Scalars['numeric'];
  type: Activity_Enum_Enum;
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
  total_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
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
  total_value?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Activity_Enum_Enum_Comparison_Exp>;
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
  total_value?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  total_value?: Maybe<Scalars['numeric']>;
  type?: Maybe<Activity_Enum_Enum>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  total_value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  ticket?: Maybe<Scalars['String']>;
  total_value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  market?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
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
  total_value?: Maybe<Order_By>;
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
  TotalValue = 'total_value',
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
  total_value?: Maybe<Scalars['numeric']>;
  type?: Maybe<Activity_Enum_Enum>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
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
  TotalValue = 'total_value',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  total_value?: Maybe<Order_By>;
};

/** columns and relationships of "activity_enum" */
export type Activity_Enum = {
  __typename?: 'activity_enum';
  type: Scalars['String'];
};

/** aggregated selection of "activity_enum" */
export type Activity_Enum_Aggregate = {
  __typename?: 'activity_enum_aggregate';
  aggregate?: Maybe<Activity_Enum_Aggregate_Fields>;
  nodes: Array<Activity_Enum>;
};

/** aggregate fields of "activity_enum" */
export type Activity_Enum_Aggregate_Fields = {
  __typename?: 'activity_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activity_Enum_Max_Fields>;
  min?: Maybe<Activity_Enum_Min_Fields>;
};


/** aggregate fields of "activity_enum" */
export type Activity_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activity_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activity_enum" */
export type Activity_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Activity_Enum_Max_Order_By>;
  min?: Maybe<Activity_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activity_enum" */
export type Activity_Enum_Arr_Rel_Insert_Input = {
  data: Array<Activity_Enum_Insert_Input>;
  on_conflict?: Maybe<Activity_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activity_enum". All fields are combined with a logical 'AND'. */
export type Activity_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activity_Enum_Bool_Exp>>>;
  _not?: Maybe<Activity_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activity_Enum_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_enum" */
export enum Activity_Enum_Constraint {
  /** unique or primary key constraint */
  ActivityEnumPkey = 'activity_enum_pkey'
}

export enum Activity_Enum_Enum {
  Buy = 'BUY',
  Div = 'DIV',
  Sell = 'SELL'
}

/** expression to compare columns of type activity_enum_enum. All fields are combined with logical 'AND'. */
export type Activity_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Activity_Enum_Enum>;
  _in?: Maybe<Array<Activity_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Activity_Enum_Enum>;
  _nin?: Maybe<Array<Activity_Enum_Enum>>;
};

/** input type for inserting data into table "activity_enum" */
export type Activity_Enum_Insert_Input = {
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Enum_Max_Fields = {
  __typename?: 'activity_enum_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "activity_enum" */
export type Activity_Enum_Max_Order_By = {
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activity_Enum_Min_Fields = {
  __typename?: 'activity_enum_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "activity_enum" */
export type Activity_Enum_Min_Order_By = {
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "activity_enum" */
export type Activity_Enum_Mutation_Response = {
  __typename?: 'activity_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activity_Enum>;
};

/** input type for inserting object relation for remote table "activity_enum" */
export type Activity_Enum_Obj_Rel_Insert_Input = {
  data: Activity_Enum_Insert_Input;
  on_conflict?: Maybe<Activity_Enum_On_Conflict>;
};

/** on conflict condition type for table "activity_enum" */
export type Activity_Enum_On_Conflict = {
  constraint: Activity_Enum_Constraint;
  update_columns: Array<Activity_Enum_Update_Column>;
  where?: Maybe<Activity_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "activity_enum" */
export type Activity_Enum_Order_By = {
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "activity_enum" */
export type Activity_Enum_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "activity_enum" */
export enum Activity_Enum_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "activity_enum" */
export type Activity_Enum_Set_Input = {
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "activity_enum" */
export enum Activity_Enum_Update_Column {
  /** column name */
  Type = 'type'
}

/**
 * for log purpose
 *
 *
 * columns and relationships of "log"
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

/** columns and relationships of "market_enum" */
export type Market_Enum = {
  __typename?: 'market_enum';
  market: Scalars['String'];
};

/** aggregated selection of "market_enum" */
export type Market_Enum_Aggregate = {
  __typename?: 'market_enum_aggregate';
  aggregate?: Maybe<Market_Enum_Aggregate_Fields>;
  nodes: Array<Market_Enum>;
};

/** aggregate fields of "market_enum" */
export type Market_Enum_Aggregate_Fields = {
  __typename?: 'market_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Market_Enum_Max_Fields>;
  min?: Maybe<Market_Enum_Min_Fields>;
};


/** aggregate fields of "market_enum" */
export type Market_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Market_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "market_enum" */
export type Market_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Market_Enum_Max_Order_By>;
  min?: Maybe<Market_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "market_enum" */
export type Market_Enum_Arr_Rel_Insert_Input = {
  data: Array<Market_Enum_Insert_Input>;
  on_conflict?: Maybe<Market_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "market_enum". All fields are combined with a logical 'AND'. */
export type Market_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Market_Enum_Bool_Exp>>>;
  _not?: Maybe<Market_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Market_Enum_Bool_Exp>>>;
  market?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "market_enum" */
export enum Market_Enum_Constraint {
  /** unique or primary key constraint */
  MarketEnumPkey = 'market_enum_pkey'
}

export enum Market_Enum_Enum {
  Lon = 'LON',
  Nasdaq = 'NASDAQ',
  Nyse = 'NYSE'
}

/** expression to compare columns of type market_enum_enum. All fields are combined with logical 'AND'. */
export type Market_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Market_Enum_Enum>;
  _in?: Maybe<Array<Market_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Market_Enum_Enum>;
  _nin?: Maybe<Array<Market_Enum_Enum>>;
};

/** input type for inserting data into table "market_enum" */
export type Market_Enum_Insert_Input = {
  market?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Market_Enum_Max_Fields = {
  __typename?: 'market_enum_max_fields';
  market?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "market_enum" */
export type Market_Enum_Max_Order_By = {
  market?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Market_Enum_Min_Fields = {
  __typename?: 'market_enum_min_fields';
  market?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "market_enum" */
export type Market_Enum_Min_Order_By = {
  market?: Maybe<Order_By>;
};

/** response of any mutation on the table "market_enum" */
export type Market_Enum_Mutation_Response = {
  __typename?: 'market_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Market_Enum>;
};

/** input type for inserting object relation for remote table "market_enum" */
export type Market_Enum_Obj_Rel_Insert_Input = {
  data: Market_Enum_Insert_Input;
  on_conflict?: Maybe<Market_Enum_On_Conflict>;
};

/** on conflict condition type for table "market_enum" */
export type Market_Enum_On_Conflict = {
  constraint: Market_Enum_Constraint;
  update_columns: Array<Market_Enum_Update_Column>;
  where?: Maybe<Market_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "market_enum" */
export type Market_Enum_Order_By = {
  market?: Maybe<Order_By>;
};

/** primary key columns input for table: "market_enum" */
export type Market_Enum_Pk_Columns_Input = {
  market: Scalars['String'];
};

/** select columns of table "market_enum" */
export enum Market_Enum_Select_Column {
  /** column name */
  Market = 'market'
}

/** input type for updating data in table "market_enum" */
export type Market_Enum_Set_Input = {
  market?: Maybe<Scalars['String']>;
};

/** update columns of table "market_enum" */
export enum Market_Enum_Update_Column {
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
  /** delete data from the table: "activity_enum" */
  delete_activity_enum?: Maybe<Activity_Enum_Mutation_Response>;
  /** delete single row from the table: "activity_enum" */
  delete_activity_enum_by_pk?: Maybe<Activity_Enum>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "market_enum" */
  delete_market_enum?: Maybe<Market_Enum_Mutation_Response>;
  /** delete single row from the table: "market_enum" */
  delete_market_enum_by_pk?: Maybe<Market_Enum>;
  /** delete data from the table: "prices_update_due" */
  delete_prices_update_due?: Maybe<Prices_Update_Due_Mutation_Response>;
  /** delete data from the table: "ticket_type_enum" */
  delete_ticket_type_enum?: Maybe<Ticket_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "ticket_type_enum" */
  delete_ticket_type_enum_by_pk?: Maybe<Ticket_Type_Enum>;
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
  /** insert data into the table: "activity_enum" */
  insert_activity_enum?: Maybe<Activity_Enum_Mutation_Response>;
  /** insert a single row into the table: "activity_enum" */
  insert_activity_enum_one?: Maybe<Activity_Enum>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "market_enum" */
  insert_market_enum?: Maybe<Market_Enum_Mutation_Response>;
  /** insert a single row into the table: "market_enum" */
  insert_market_enum_one?: Maybe<Market_Enum>;
  /** insert data into the table: "ticket_type_enum" */
  insert_ticket_type_enum?: Maybe<Ticket_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "ticket_type_enum" */
  insert_ticket_type_enum_one?: Maybe<Ticket_Type_Enum>;
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
  /** update data of the table: "activity_enum" */
  update_activity_enum?: Maybe<Activity_Enum_Mutation_Response>;
  /** update single row of the table: "activity_enum" */
  update_activity_enum_by_pk?: Maybe<Activity_Enum>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update data of the table: "market_enum" */
  update_market_enum?: Maybe<Market_Enum_Mutation_Response>;
  /** update single row of the table: "market_enum" */
  update_market_enum_by_pk?: Maybe<Market_Enum>;
  /** update data of the table: "ticket_type_enum" */
  update_ticket_type_enum?: Maybe<Ticket_Type_Enum_Mutation_Response>;
  /** update single row of the table: "ticket_type_enum" */
  update_ticket_type_enum_by_pk?: Maybe<Ticket_Type_Enum>;
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
export type Mutation_RootDelete_Activity_EnumArgs = {
  where: Activity_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_Enum_By_PkArgs = {
  type: Scalars['String'];
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
export type Mutation_RootDelete_Market_EnumArgs = {
  where: Market_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Market_Enum_By_PkArgs = {
  market: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Prices_Update_DueArgs = {
  where: Prices_Update_Due_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Type_EnumArgs = {
  where: Ticket_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Type_Enum_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  market: Market_Enum_Enum;
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
export type Mutation_RootInsert_Activity_EnumArgs = {
  objects: Array<Activity_Enum_Insert_Input>;
  on_conflict?: Maybe<Activity_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Enum_OneArgs = {
  object: Activity_Enum_Insert_Input;
  on_conflict?: Maybe<Activity_Enum_On_Conflict>;
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
export type Mutation_RootInsert_Market_EnumArgs = {
  objects: Array<Market_Enum_Insert_Input>;
  on_conflict?: Maybe<Market_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_Enum_OneArgs = {
  object: Market_Enum_Insert_Input;
  on_conflict?: Maybe<Market_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Type_EnumArgs = {
  objects: Array<Ticket_Type_Enum_Insert_Input>;
  on_conflict?: Maybe<Ticket_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Type_Enum_OneArgs = {
  object: Ticket_Type_Enum_Insert_Input;
  on_conflict?: Maybe<Ticket_Type_Enum_On_Conflict>;
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
export type Mutation_RootUpdate_Activity_EnumArgs = {
  _set?: Maybe<Activity_Enum_Set_Input>;
  where: Activity_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Enum_By_PkArgs = {
  _set?: Maybe<Activity_Enum_Set_Input>;
  pk_columns: Activity_Enum_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Market_EnumArgs = {
  _set?: Maybe<Market_Enum_Set_Input>;
  where: Market_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Market_Enum_By_PkArgs = {
  _set?: Maybe<Market_Enum_Set_Input>;
  pk_columns: Market_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Type_EnumArgs = {
  _set?: Maybe<Ticket_Type_Enum_Set_Input>;
  where: Ticket_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Type_Enum_By_PkArgs = {
  _set?: Maybe<Ticket_Type_Enum_Set_Input>;
  pk_columns: Ticket_Type_Enum_Pk_Columns_Input;
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
  /** fetch data from the table: "activity_enum" */
  activity_enum: Array<Activity_Enum>;
  /** fetch aggregated fields from the table: "activity_enum" */
  activity_enum_aggregate: Activity_Enum_Aggregate;
  /** fetch data from the table: "activity_enum" using primary key columns */
  activity_enum_by_pk?: Maybe<Activity_Enum>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "market_enum" */
  market_enum: Array<Market_Enum>;
  /** fetch aggregated fields from the table: "market_enum" */
  market_enum_aggregate: Market_Enum_Aggregate;
  /** fetch data from the table: "market_enum" using primary key columns */
  market_enum_by_pk?: Maybe<Market_Enum>;
  /** fetch data from the table: "prices_update_due" */
  prices_update_due: Array<Prices_Update_Due>;
  /** fetch aggregated fields from the table: "prices_update_due" */
  prices_update_due_aggregate: Prices_Update_Due_Aggregate;
  /** fetch data from the table: "ticket_type_enum" */
  ticket_type_enum: Array<Ticket_Type_Enum>;
  /** fetch aggregated fields from the table: "ticket_type_enum" */
  ticket_type_enum_aggregate: Ticket_Type_Enum_Aggregate;
  /** fetch data from the table: "ticket_type_enum" using primary key columns */
  ticket_type_enum_by_pk?: Maybe<Ticket_Type_Enum>;
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
export type Query_RootActivity_EnumArgs = {
  distinct_on?: Maybe<Array<Activity_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Enum_Order_By>>;
  where?: Maybe<Activity_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Enum_Order_By>>;
  where?: Maybe<Activity_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_Enum_By_PkArgs = {
  type: Scalars['String'];
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
export type Query_RootMarket_EnumArgs = {
  distinct_on?: Maybe<Array<Market_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Enum_Order_By>>;
  where?: Maybe<Market_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootMarket_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Enum_Order_By>>;
  where?: Maybe<Market_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootMarket_Enum_By_PkArgs = {
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
export type Query_RootTicket_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Enum_Order_By>>;
  where?: Maybe<Ticket_Type_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Enum_Order_By>>;
  where?: Maybe<Ticket_Type_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Type_Enum_By_PkArgs = {
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
  market: Market_Enum_Enum;
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
  /** fetch data from the table: "activity_enum" */
  activity_enum: Array<Activity_Enum>;
  /** fetch aggregated fields from the table: "activity_enum" */
  activity_enum_aggregate: Activity_Enum_Aggregate;
  /** fetch data from the table: "activity_enum" using primary key columns */
  activity_enum_by_pk?: Maybe<Activity_Enum>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "market_enum" */
  market_enum: Array<Market_Enum>;
  /** fetch aggregated fields from the table: "market_enum" */
  market_enum_aggregate: Market_Enum_Aggregate;
  /** fetch data from the table: "market_enum" using primary key columns */
  market_enum_by_pk?: Maybe<Market_Enum>;
  /** fetch data from the table: "prices_update_due" */
  prices_update_due: Array<Prices_Update_Due>;
  /** fetch aggregated fields from the table: "prices_update_due" */
  prices_update_due_aggregate: Prices_Update_Due_Aggregate;
  /** fetch data from the table: "ticket_type_enum" */
  ticket_type_enum: Array<Ticket_Type_Enum>;
  /** fetch aggregated fields from the table: "ticket_type_enum" */
  ticket_type_enum_aggregate: Ticket_Type_Enum_Aggregate;
  /** fetch data from the table: "ticket_type_enum" using primary key columns */
  ticket_type_enum_by_pk?: Maybe<Ticket_Type_Enum>;
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
export type Subscription_RootActivity_EnumArgs = {
  distinct_on?: Maybe<Array<Activity_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Enum_Order_By>>;
  where?: Maybe<Activity_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Enum_Order_By>>;
  where?: Maybe<Activity_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_Enum_By_PkArgs = {
  type: Scalars['String'];
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
export type Subscription_RootMarket_EnumArgs = {
  distinct_on?: Maybe<Array<Market_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Enum_Order_By>>;
  where?: Maybe<Market_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMarket_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Market_Enum_Order_By>>;
  where?: Maybe<Market_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMarket_Enum_By_PkArgs = {
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
export type Subscription_RootTicket_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Enum_Order_By>>;
  where?: Maybe<Ticket_Type_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Type_Enum_Order_By>>;
  where?: Maybe<Ticket_Type_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Type_Enum_By_PkArgs = {
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
  market: Market_Enum_Enum;
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

/** columns and relationships of "ticket_type_enum" */
export type Ticket_Type_Enum = {
  __typename?: 'ticket_type_enum';
  type: Scalars['String'];
};

/** aggregated selection of "ticket_type_enum" */
export type Ticket_Type_Enum_Aggregate = {
  __typename?: 'ticket_type_enum_aggregate';
  aggregate?: Maybe<Ticket_Type_Enum_Aggregate_Fields>;
  nodes: Array<Ticket_Type_Enum>;
};

/** aggregate fields of "ticket_type_enum" */
export type Ticket_Type_Enum_Aggregate_Fields = {
  __typename?: 'ticket_type_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ticket_Type_Enum_Max_Fields>;
  min?: Maybe<Ticket_Type_Enum_Min_Fields>;
};


/** aggregate fields of "ticket_type_enum" */
export type Ticket_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ticket_Type_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ticket_type_enum" */
export type Ticket_Type_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Ticket_Type_Enum_Max_Order_By>;
  min?: Maybe<Ticket_Type_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ticket_type_enum" */
export type Ticket_Type_Enum_Arr_Rel_Insert_Input = {
  data: Array<Ticket_Type_Enum_Insert_Input>;
  on_conflict?: Maybe<Ticket_Type_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ticket_type_enum". All fields are combined with a logical 'AND'. */
export type Ticket_Type_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ticket_Type_Enum_Bool_Exp>>>;
  _not?: Maybe<Ticket_Type_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ticket_Type_Enum_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ticket_type_enum" */
export enum Ticket_Type_Enum_Constraint {
  /** unique or primary key constraint */
  TicketTypePkey = 'ticket_type_pkey'
}

export enum Ticket_Type_Enum_Enum {
  Div1 = 'div1',
  Div2 = 'div2',
  Mix = 'mix',
  Trading = 'trading'
}

/** expression to compare columns of type ticket_type_enum_enum. All fields are combined with logical 'AND'. */
export type Ticket_Type_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Ticket_Type_Enum_Enum>;
  _in?: Maybe<Array<Ticket_Type_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Ticket_Type_Enum_Enum>;
  _nin?: Maybe<Array<Ticket_Type_Enum_Enum>>;
};

/** input type for inserting data into table "ticket_type_enum" */
export type Ticket_Type_Enum_Insert_Input = {
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ticket_Type_Enum_Max_Fields = {
  __typename?: 'ticket_type_enum_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ticket_type_enum" */
export type Ticket_Type_Enum_Max_Order_By = {
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ticket_Type_Enum_Min_Fields = {
  __typename?: 'ticket_type_enum_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ticket_type_enum" */
export type Ticket_Type_Enum_Min_Order_By = {
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "ticket_type_enum" */
export type Ticket_Type_Enum_Mutation_Response = {
  __typename?: 'ticket_type_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ticket_Type_Enum>;
};

/** input type for inserting object relation for remote table "ticket_type_enum" */
export type Ticket_Type_Enum_Obj_Rel_Insert_Input = {
  data: Ticket_Type_Enum_Insert_Input;
  on_conflict?: Maybe<Ticket_Type_Enum_On_Conflict>;
};

/** on conflict condition type for table "ticket_type_enum" */
export type Ticket_Type_Enum_On_Conflict = {
  constraint: Ticket_Type_Enum_Constraint;
  update_columns: Array<Ticket_Type_Enum_Update_Column>;
  where?: Maybe<Ticket_Type_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "ticket_type_enum" */
export type Ticket_Type_Enum_Order_By = {
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "ticket_type_enum" */
export type Ticket_Type_Enum_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "ticket_type_enum" */
export enum Ticket_Type_Enum_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "ticket_type_enum" */
export type Ticket_Type_Enum_Set_Input = {
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "ticket_type_enum" */
export enum Ticket_Type_Enum_Update_Column {
  /** column name */
  Type = 'type'
}

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  latest_price?: Maybe<Scalars['String']>;
  market: Market_Enum_Enum;
  name: Scalars['String'];
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket: Scalars['String'];
  ticket_type: Ticket_Type_Enum_Enum;
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
  latest_price?: Maybe<String_Comparison_Exp>;
  market?: Maybe<Market_Enum_Enum_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  ticket?: Maybe<String_Comparison_Exp>;
  ticket_type?: Maybe<Ticket_Type_Enum_Enum_Comparison_Exp>;
  update_price?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint */
  TicketsPkey = 'tickets_pkey'
}

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  latest_price?: Maybe<Scalars['String']>;
  market?: Maybe<Market_Enum_Enum>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Ticket_Type_Enum_Enum>;
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
  market: Market_Enum_Enum;
  ticket: Scalars['String'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
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
  latest_price?: Maybe<Scalars['String']>;
  market?: Maybe<Market_Enum_Enum>;
  name?: Maybe<Scalars['String']>;
  price_timestamp?: Maybe<Scalars['timestamptz']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Ticket_Type_Enum_Enum>;
  update_price?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
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
  type: Activity_Enum_Enum;
}>;


export type InsertActivityMutation = (
  { __typename?: 'mutation_root' }
  & { insert_activities_one?: Maybe<(
    { __typename?: 'activities' }
    & Pick<Activities, 'id' | 'ticket' | 'market' | 'type' | 'quantity' | 'total_value' | 'date'>
  )> }
);

export type InsertLogMutationVariables = Exact<{
  contract: Scalars['String'];
  detail: Scalars['String'];
}>;


export type InsertLogMutation = (
  { __typename?: 'mutation_root' }
  & { insert_log_one?: Maybe<(
    { __typename?: 'log' }
    & Pick<Log, 'id' | 'timestamp' | 'contract' | 'detail'>
  )> }
);

export type InsertTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  name: Scalars['String'];
  ticket_type: Ticket_Type_Enum_Enum;
  market: Market_Enum_Enum;
}>;


export type InsertTicketMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tickets_one?: Maybe<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'ticket' | 'name' | 'ticket_type' | 'market'>
  )> }
);

export type UpdateTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  name: Scalars['String'];
  ticket_type: Ticket_Type_Enum_Enum;
  market: Market_Enum_Enum;
}>;


export type UpdateTicketMutation = (
  { __typename?: 'mutation_root' }
  & { update_tickets_by_pk?: Maybe<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'ticket' | 'market' | 'name' | 'ticket_type'>
  )> }
);

export type UpdateTicketPriceMutationVariables = Exact<{
  ticket: Scalars['String'];
  market: Market_Enum_Enum;
  price: Scalars['String'];
  timestamp: Scalars['timestamptz'];
}>;


export type UpdateTicketPriceMutation = (
  { __typename?: 'mutation_root' }
  & { update_tickets_by_pk?: Maybe<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'ticket' | 'market' | 'latest_price' | 'price_timestamp'>
  )> }
);

export type AllActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = (
  { __typename?: 'query_root' }
  & { activities: Array<(
    { __typename?: 'activities' }
    & Pick<Activities, 'id' | 'date' | 'ticket' | 'market' | 'type' | 'quantity' | 'total_value'>
  )> }
);

export type AllTicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTicketsQuery = (
  { __typename?: 'query_root' }
  & { tickets: Array<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'name' | 'ticket' | 'ticket_type' | 'market' | 'latest_price'>
  )> }
);

export type PricesToUpdateQueryVariables = Exact<{ [key: string]: never; }>;


export type PricesToUpdateQuery = (
  { __typename?: 'query_root' }
  & { prices_update_due: Array<(
    { __typename?: 'prices_update_due' }
    & Pick<Prices_Update_Due, 'ticket'>
  )> }
);


export const InsertActivityDocument = gql`
    mutation insertActivity($date: timestamptz!, $ticket: String!, $market: String!, $totalValue: numeric!, $quantity: numeric!, $type: activity_enum_enum!) {
  insert_activities_one(
    object: {date: $date, market: $market, quantity: $quantity, ticket: $ticket, total_value: $totalValue, type: $type}
  ) {
    id
    ticket
    market
    type
    quantity
    total_value
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
        return Apollo.useMutation<InsertActivityMutation, InsertActivityMutationVariables>(InsertActivityDocument, baseOptions);
      }
export type InsertActivityMutationHookResult = ReturnType<typeof useInsertActivityMutation>;
export type InsertActivityMutationResult = Apollo.MutationResult<InsertActivityMutation>;
export type InsertActivityMutationOptions = Apollo.BaseMutationOptions<InsertActivityMutation, InsertActivityMutationVariables>;
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
        return Apollo.useMutation<InsertLogMutation, InsertLogMutationVariables>(InsertLogDocument, baseOptions);
      }
export type InsertLogMutationHookResult = ReturnType<typeof useInsertLogMutation>;
export type InsertLogMutationResult = Apollo.MutationResult<InsertLogMutation>;
export type InsertLogMutationOptions = Apollo.BaseMutationOptions<InsertLogMutation, InsertLogMutationVariables>;
export const InsertTicketDocument = gql`
    mutation insertTicket($ticket: String!, $name: String!, $ticket_type: ticket_type_enum_enum!, $market: market_enum_enum!) {
  insert_tickets_one(
    object: {name: $name, ticket: $ticket, ticket_type: $ticket_type, market: $market}
  ) {
    ticket
    name
    ticket_type
    market
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
 *   },
 * });
 */
export function useInsertTicketMutation(baseOptions?: Apollo.MutationHookOptions<InsertTicketMutation, InsertTicketMutationVariables>) {
        return Apollo.useMutation<InsertTicketMutation, InsertTicketMutationVariables>(InsertTicketDocument, baseOptions);
      }
export type InsertTicketMutationHookResult = ReturnType<typeof useInsertTicketMutation>;
export type InsertTicketMutationResult = Apollo.MutationResult<InsertTicketMutation>;
export type InsertTicketMutationOptions = Apollo.BaseMutationOptions<InsertTicketMutation, InsertTicketMutationVariables>;
export const UpdateTicketDocument = gql`
    mutation updateTicket($ticket: String!, $name: String!, $ticket_type: ticket_type_enum_enum!, $market: market_enum_enum!) {
  update_tickets_by_pk(
    _set: {name: $name, ticket_type: $ticket_type}
    pk_columns: {ticket: $ticket, market: $market}
  ) {
    ticket
    market
    name
    ticket_type
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
 *   },
 * });
 */
export function useUpdateTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTicketMutation, UpdateTicketMutationVariables>) {
        return Apollo.useMutation<UpdateTicketMutation, UpdateTicketMutationVariables>(UpdateTicketDocument, baseOptions);
      }
export type UpdateTicketMutationHookResult = ReturnType<typeof useUpdateTicketMutation>;
export type UpdateTicketMutationResult = Apollo.MutationResult<UpdateTicketMutation>;
export type UpdateTicketMutationOptions = Apollo.BaseMutationOptions<UpdateTicketMutation, UpdateTicketMutationVariables>;
export const UpdateTicketPriceDocument = gql`
    mutation updateTicketPrice($ticket: String!, $market: market_enum_enum!, $price: String!, $timestamp: timestamptz!) {
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
        return Apollo.useMutation<UpdateTicketPriceMutation, UpdateTicketPriceMutationVariables>(UpdateTicketPriceDocument, baseOptions);
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
    total_value
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
        return Apollo.useQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, baseOptions);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
          return Apollo.useLazyQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, baseOptions);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<AllActivitiesQuery, AllActivitiesQueryVariables>;
export const AllTicketsDocument = gql`
    query allTickets {
  tickets(order_by: {ticket: asc}) {
    name
    ticket
    ticket_type
    market
    latest_price
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
        return Apollo.useQuery<AllTicketsQuery, AllTicketsQueryVariables>(AllTicketsDocument, baseOptions);
      }
export function useAllTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTicketsQuery, AllTicketsQueryVariables>) {
          return Apollo.useLazyQuery<AllTicketsQuery, AllTicketsQueryVariables>(AllTicketsDocument, baseOptions);
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
        return Apollo.useQuery<PricesToUpdateQuery, PricesToUpdateQueryVariables>(PricesToUpdateDocument, baseOptions);
      }
export function usePricesToUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PricesToUpdateQuery, PricesToUpdateQueryVariables>) {
          return Apollo.useLazyQuery<PricesToUpdateQuery, PricesToUpdateQueryVariables>(PricesToUpdateDocument, baseOptions);
        }
export type PricesToUpdateQueryHookResult = ReturnType<typeof usePricesToUpdateQuery>;
export type PricesToUpdateLazyQueryHookResult = ReturnType<typeof usePricesToUpdateLazyQuery>;
export type PricesToUpdateQueryResult = Apollo.QueryResult<PricesToUpdateQuery, PricesToUpdateQueryVariables>;