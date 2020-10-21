import { AssignmentReturnTwoTone } from "@material-ui/icons";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("users");

export interface ILoginPayload {
  userName: string;
  password: string;
}

export interface ILoginSucceededPayload {
  userName: string;
}

export const isLoginSucceededPayload = (arg: any) => {
  return (
    arg !== null && typeof arg === "object" && typeof arg.userName === "string"
  );
};
export interface ILoginFailedPayload {}

export interface ILogoutPayload {}
export interface ILogoutSucceededPayload {}
export interface ILogoutFailedPayload {}

export const UsersActions = {
  login: actionCreator<ILoginPayload>("Login"),
  loginSucceeded: actionCreator<ILoginSucceededPayload>("LoginSucceeded"),
  loginFailed: actionCreator<ILoginFailedPayload>("LoginFailed"),
  logout: actionCreator<ILogoutPayload>("Logout"),
};

export type UsersActionTypes =
  | ReturnType<typeof UsersActions.login>
  | ReturnType<typeof UsersActions.loginSucceeded>
  | ReturnType<typeof UsersActions.loginFailed>
  | ReturnType<typeof UsersActions.logout>;
