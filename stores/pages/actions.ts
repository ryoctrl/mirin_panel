import actionCreatorFactory from "typescript-fsa";
import { Page } from "libs";

const actionCreator = actionCreatorFactory("pages");

export interface IPagePayload {
  selectedPage: Page;
}

export const PageActions = {
  changePage: actionCreator<IPagePayload>("changePage"),
};
