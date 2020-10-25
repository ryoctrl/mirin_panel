import { HYDRATE } from 'next-redux-wrapper';
import actionCreatorFactory from 'typescript-fsa';
import { IExhibitionsState } from './exhibitions';
import { IPageState } from './pages';

const hydrateActionCreator = actionCreatorFactory('');

export interface IHydratePayload {
  pages: IPageState;
  exhibitionState: IExhibitionsState;
}

export const AppActions = {
  hydrate: hydrateActionCreator<IHydratePayload>(HYDRATE),
};
