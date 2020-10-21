import { Slide, Snackbar } from "@material-ui/core";
import * as React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { useAlerts } from "hooks";

export const Alert = () => {
  const { alertState, hideAlert } = useAlerts();

  return (
    <Snackbar
      open={alertState.isOpen}
      autoHideDuration={8000}
      TransitionComponent={Slide}
      onClose={hideAlert}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={hideAlert}
        severity={alertState.severity}
      >
        {alertState.message}
      </MuiAlert>
    </Snackbar>
  );
};
