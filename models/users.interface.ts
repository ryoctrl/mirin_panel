export interface IUser {
  id?: number;
  name: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface IUserCredential {
  id?: number;
  user: IUser;
  password: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
