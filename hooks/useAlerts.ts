import { Color } from "@material-ui/lab/Alert";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertActions, alertStateSelector, IAlertState } from "stores/alerts";

type AlertsOperators = {
  alertState: IAlertState;
  displayAlert: (message: string, severity: Color) => void;
  hideAlert: () => void;
};

export const useAlerts = (): Readonly<AlertsOperators> => {
  const dispatch = useDispatch();
  const alertState = useSelector(alertStateSelector);

  return {
    alertState: alertState,
    displayAlert: useCallback(
      (message: string, severity: Color) => {
        dispatch(AlertActions.displayAlert({ message, severity }));
      },
      [dispatch]
    ),
    hideAlert: useCallback(() => {
      dispatch(AlertActions.hideAlert({}));
    }, [dispatch]),
  };
};
