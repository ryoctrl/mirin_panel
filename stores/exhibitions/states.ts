import { IExhibition, IYears } from 'models/exhibitions.interface';

export interface IExhibitionsState {
  years: IYears[];
}

export const ExhibitionsInitialState: IExhibitionsState = {
  years: [],
};

export const getYears = (state: IExhibitionsState, year: string): IYears => {
  const y = state.years.filter((y) => y.years === year);
  return y.length === 0 ? null : y[0];
};

export const getExhibition = (
  state: IExhibitionsState,
  year: string,
  season: string
) => {
  const y = getYears(state, year);
  if (!y) return null;

  const e = y.exhibitions.filter((e) => e.title === season);
  return e.length === 0 ? null : e[0];
};
