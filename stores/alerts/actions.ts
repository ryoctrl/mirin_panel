import { Color } from '@material-ui/lab/Alert';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('alert');

export interface IDisplayAlertPayload {
  severity: Color;
  message: string;
}

export interface IHideAlertPaload {}

export const AlertActions = {
  displayAlert: actionCreator<IDisplayAlertPayload>('displayAlert'),
  hideAlert: actionCreator<IHideAlertPaload>('hideAlert'),
};
