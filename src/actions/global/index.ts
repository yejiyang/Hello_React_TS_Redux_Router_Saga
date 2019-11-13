import { GO_LOGIN_PAGE } from "./counterConstants";

export interface IGoToPage {
  type: GO_LOGIN_PAGE;
}


export type GlobalAction = IGoToPage ;

export const goToPage = (): IGoToPage => {
  return { type: GO_LOGIN_PAGE };
};
