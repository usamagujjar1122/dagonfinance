import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../Redux/action/alertactions";

const Alertt = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alert(props) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(true);
  };
  const alerts = useSelector((state) => state.alert);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const close = (id) => {
    dispatch(removeAlert(id))
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {alerts
        ? alerts.map((alert) => (
            <Snackbar
              open={props.open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alertt
                onClose={()=>{close(alert.id)}}
                severity={alert.alertType}
                sx={{ width: "100%" }}
              >
                {alert.msg}
              </Alertt>
            </Snackbar>
          ))
        : null}
    </Stack>
  );
}
