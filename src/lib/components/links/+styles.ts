import { makeStyles } from "@material-ui/core";

export const useLinkStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
    },

    marker: {
      marginRight: theme.spacing(2),
    },
  }),
  { name: "Link" }
);
