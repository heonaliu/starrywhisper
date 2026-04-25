import { AllDreamsData, CreateMyDreamData, CreateMyDreamVariables, StarADreamData, StarADreamVariables, MyDreamsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAllDreams(options?: useDataConnectQueryOptions<AllDreamsData>): UseDataConnectQueryResult<AllDreamsData, undefined>;
export function useAllDreams(dc: DataConnect, options?: useDataConnectQueryOptions<AllDreamsData>): UseDataConnectQueryResult<AllDreamsData, undefined>;

export function useCreateMyDream(options?: useDataConnectMutationOptions<CreateMyDreamData, FirebaseError, CreateMyDreamVariables>): UseDataConnectMutationResult<CreateMyDreamData, CreateMyDreamVariables>;
export function useCreateMyDream(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMyDreamData, FirebaseError, CreateMyDreamVariables>): UseDataConnectMutationResult<CreateMyDreamData, CreateMyDreamVariables>;

export function useStarADream(options?: useDataConnectMutationOptions<StarADreamData, FirebaseError, StarADreamVariables>): UseDataConnectMutationResult<StarADreamData, StarADreamVariables>;
export function useStarADream(dc: DataConnect, options?: useDataConnectMutationOptions<StarADreamData, FirebaseError, StarADreamVariables>): UseDataConnectMutationResult<StarADreamData, StarADreamVariables>;

export function useMyDreams(options?: useDataConnectQueryOptions<MyDreamsData>): UseDataConnectQueryResult<MyDreamsData, undefined>;
export function useMyDreams(dc: DataConnect, options?: useDataConnectQueryOptions<MyDreamsData>): UseDataConnectQueryResult<MyDreamsData, undefined>;
