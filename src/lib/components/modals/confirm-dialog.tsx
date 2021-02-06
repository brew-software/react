import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  IconButton,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { ReactNode } from "react";
import { TimesIcon } from "@brew-software/react-icons";

type ConfirmDialogProps = {
  open: boolean;
  title?: ReactNode;
  content?: ReactNode;
  confirmButton?: ReactNode;
  cancelButton?: ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
  primaryAction?: "confirm" | "cancel";
};

const titleStyles = createStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  closeButton: {
    marginLeft: "auto",
  },
});

type DialogTitleProps = WithStyles<typeof titleStyles> & {
  children: ReactNode;
  onClose?: () => void;
};
const DialogTitle = withStyles(titleStyles)(
  ({ children, classes, onClose }: DialogTitleProps) => {
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">
          <b>{children}</b>
        </Typography>
        {onClose && (
          <IconButton
            onClick={onClose}
            className={classes.closeButton}
            size="small"
          >
            <TimesIcon type="solid" />
          </IconButton>
        )}
      </MuiDialogTitle>
    );
  }
);

export default function ConfirmDialog({
  open,
  title,
  content,
  confirmButton,
  cancelButton,
  onConfirm,
  onClose,
  primaryAction = "confirm",
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const cancelButtonElement = (
    <Button
      variant={primaryAction === "cancel" ? "contained" : "outlined"}
      color={primaryAction === "cancel" ? "secondary" : "default"}
      onClick={handleClose}
    >
      {cancelButton ? cancelButton : "Cancel"}
    </Button>
  );

  const confirmButtonElement = (
    <Button
      variant={primaryAction === "confirm" ? "contained" : "outlined"}
      color={primaryAction === "confirm" ? "secondary" : "default"}
      onClick={handleConfirm}
    >
      {confirmButton ? confirmButton : "OK"}
    </Button>
  );

  return (
    <Dialog open={open} onBackdropClick={onClose}>
      <DialogTitle onClose={onClose}>{title}</DialogTitle>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>
        {primaryAction === "confirm" && (
          <>
            {cancelButtonElement}
            {confirmButtonElement}
          </>
        )}
        {primaryAction === "cancel" && (
          <>
            {confirmButtonElement}
            {cancelButtonElement}
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
