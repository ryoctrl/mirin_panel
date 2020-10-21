import { IUser } from "models/User";

export interface IUserState extends IUser {}

export const UsersInitialState: IUserState = {
  name: "NoName",
};
