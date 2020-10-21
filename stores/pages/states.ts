import { Page } from "libs";

export interface IPageState {
  selectedPage: Page;
}

export const PageInitialState: IPageState = {
  selectedPage: Page.TOP,
};
