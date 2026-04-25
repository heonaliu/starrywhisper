import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AllDreamsData {
  dreams: ({
    id: UUIDString;
    content: string;
    mood?: string | null;
    createdAt: TimestampString;
    tags?: string[] | null;
  } & Dream_Key)[];
}

export interface CreateMyDreamData {
  dream_insert: Dream_Key;
}

export interface CreateMyDreamVariables {
  content: string;
  mood?: string | null;
  tags?: string[] | null;
}

export interface Dream_Key {
  id: UUIDString;
  __typename?: 'Dream_Key';
}

export interface MyDreamsData {
  users: ({
    id: UUIDString;
    dreams_via_StarredDream: ({
      id: UUIDString;
      content: string;
      mood?: string | null;
      createdAt: TimestampString;
    } & Dream_Key)[];
  } & User_Key)[];
}

export interface Report_Key {
  id: UUIDString;
  __typename?: 'Report_Key';
}

export interface StarADreamData {
  starredDream_insert: StarredDream_Key;
}

export interface StarADreamVariables {
  dreamId: UUIDString;
}

export interface StarredDream_Key {
  userId: UUIDString;
  dreamId: UUIDString;
  __typename?: 'StarredDream_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AllDreamsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<AllDreamsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<AllDreamsData, undefined>;
  operationName: string;
}
export const allDreamsRef: AllDreamsRef;

export function allDreams(options?: ExecuteQueryOptions): QueryPromise<AllDreamsData, undefined>;
export function allDreams(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<AllDreamsData, undefined>;

interface CreateMyDreamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMyDreamVariables): MutationRef<CreateMyDreamData, CreateMyDreamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMyDreamVariables): MutationRef<CreateMyDreamData, CreateMyDreamVariables>;
  operationName: string;
}
export const createMyDreamRef: CreateMyDreamRef;

export function createMyDream(vars: CreateMyDreamVariables): MutationPromise<CreateMyDreamData, CreateMyDreamVariables>;
export function createMyDream(dc: DataConnect, vars: CreateMyDreamVariables): MutationPromise<CreateMyDreamData, CreateMyDreamVariables>;

interface StarADreamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: StarADreamVariables): MutationRef<StarADreamData, StarADreamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: StarADreamVariables): MutationRef<StarADreamData, StarADreamVariables>;
  operationName: string;
}
export const starADreamRef: StarADreamRef;

export function starADream(vars: StarADreamVariables): MutationPromise<StarADreamData, StarADreamVariables>;
export function starADream(dc: DataConnect, vars: StarADreamVariables): MutationPromise<StarADreamData, StarADreamVariables>;

interface MyDreamsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyDreamsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyDreamsData, undefined>;
  operationName: string;
}
export const myDreamsRef: MyDreamsRef;

export function myDreams(options?: ExecuteQueryOptions): QueryPromise<MyDreamsData, undefined>;
export function myDreams(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<MyDreamsData, undefined>;

