import { HYDRATE } from 'next-redux-wrapper';
import actionCreatorFactory from 'typescript-fsa';
import { IPageState } from './pages';

const hydrateActionCreator = actionCreatorFactory('');

export interface IHydratePayload {
  pages: IPageState;
}

export const AppActions = {
  hydrate: hydrateActionCreator<IHydratePayload>(HYDRATE),
};
