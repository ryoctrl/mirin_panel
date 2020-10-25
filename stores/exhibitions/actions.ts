import actionCreatorFactory from 'typescript-fsa';
import { IYears } from 'models';

const actionCreator = actionCreatorFactory('exhibitions');

export interface IFetchYearsPayload {}
export interface IFetchYearsSuccessPayload extends Array<IYears> {}
export interface IFetchYearsFailurePayload {}

export const ExhibitionsActions = {
  fetchYears: actionCreator<IFetchYearsPayload>('fetchYears'),
  fetchYearsSucceeded: actionCreator<IFetchYearsSuccessPayload>(
    'fetchYearsSucceeded'
  ),
  fetchYearsFailed: actionCreator<IFetchYearsFailurePayload>(
    'fetchYearsFailed'
  ),
};

export type ExhibitionsActionsTypes =
  | ReturnType<typeof ExhibitionsActions.fetchYears>
  | ReturnType<typeof ExhibitionsActions.fetchYearsSucceeded>
  | ReturnType<typeof ExhibitionsActions.fetchYearsFailed>;
