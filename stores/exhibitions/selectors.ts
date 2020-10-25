import { RootState } from '../reducers';

export const exhibitionStateSelector = (state: RootState) =>
  state.exhibitionState;
