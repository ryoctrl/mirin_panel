import { Color } from '@material-ui/lab/Alert';

export interface IAlertState {
  isOpen: boolean;
  message?: string;
  severity?: Color;
}

export const AlertInitialState: IAlertState = {
  isOpen: false,
};
