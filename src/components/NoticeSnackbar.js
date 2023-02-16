import React from "react";
import { atom, useRecoilState } from "recoil";
import { Snackbar, Alert as MuiAlert } from "@mui/material";

export function useNoticeSnackbarStatus() {
  const [noticeSnackbarInfo, setNoticeSnackbarInfo] = useRecoilState(noticeSnackbarInfoAtom);
  
  const opened = noticeSnackbarInfo.opened;
  const autoHideDuration = noticeSnackbarInfo.autoHideDuration;
  const severity = noticeSnackbarInfo.severity;
  const msg = noticeSnackbarInfo.msg;

  const open = (msg, severity = "success", autoHideDuration = 6000) => {
    setNoticeSnackbarInfo({
      opened: true,
      autoHideDuration,
      severity,
      msg,
    })
  }

  const close = () => {
    setNoticeSnackbarInfo({
      ...noticeSnackbarInfo,
      opened: false,
    })
  }

  return {
    opened,
    open,
    close,
    autoHideDuration,
    severity,
    msg
  };
}

export const Alert = React.forwardRef((props, ref) => {
  return (
    <MuiAlert {...props} ref={ref} variant="filled" />
  )
});

export const noticeSnackbarInfoAtom = atom({
  key: "app/noticeSnackbarInfoAtom",
  default: {
    opened: false,
    autoHideDuration: 0,
    severity: "",
    msg: "",
  }
})

export function NoticeSnackBar() {
    const status = useNoticeSnackbarStatus();
    return (
      <>
        <Snackbar
          open={status.opened}
          autoHideDuration={status.autoHideDuration}
          onClose={status.close}>
          <Alert severity={status.severity}>{status.msg}</Alert>
        </Snackbar>
      </>
    );
  }