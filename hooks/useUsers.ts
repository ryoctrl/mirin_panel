import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserState, UsersActions, userStateSelector } from "stores/users";

type UsersOperators = {
  userState: IUserState;
  login: (userName: string, password: string) => void;
  logout: () => void;
};

export const useUsers = (): Readonly<UsersOperators> => {
  const dispatch = useDispatch();
  const userState = useSelector(userStateSelector);

  return {
    userState: userState,
    login: useCallback(
      (userName: string, password: string) => {
        dispatch(
          UsersActions.login({
            userName,
            password,
          })
        );
      },
      [dispatch]
    ),
    logout: useCallback(() => dispatch(UsersActions.logout({})), [dispatch]),
  };
};
