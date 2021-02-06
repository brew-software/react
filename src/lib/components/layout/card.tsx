import {
  Card as MuiCard,
  CardContent,
  Divider,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { ReactNode, useMemo } from "react";
import LoadingIndicator from "../loading-indicator";

type CardProps = { header?: ReactNode; className?: string } & (
  | { children?: ReactNode }
  | { loading: boolean; children?: () => ReactNode }
);

const useStyles = makeStyles(
  (theme) => ({
    header: {
      flex: "0 0 auto",
    },

    muiCardContent: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },

    content: {
      position: "relative",
      flex: "1 0 0",
    },

    loadingIndicator: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },

    divider: {
      marginTop: theme.spacing(1),
    },
  }),
  { name: "Card" }
);

export default function Card(props: CardProps) {
  const classes = useStyles();
  const theme = useTheme();
  const loading = useMemo(() => "loading" in props && props.loading, [props]);

  return (
    <MuiCard className={props.className}>
      <CardContent className={classes.muiCardContent}>
        {props.header && (
          <Typography variant="h5">
            {props.header} <Divider className={classes.divider} />
          </Typography>
        )}

        <div
          className={classes.content}
          style={{
            minHeight: loading ? "75px" : "auto",
            marginTop: props.header ? theme.spacing(2) : 0,
          }}
        >
          {loading ? (
            <span className={classes.loadingIndicator}>
              <LoadingIndicator size={75} />
            </span>
          ) : typeof props.children === "function" ? (
            props.children()
          ) : (
            props.children
          )}
        </div>
      </CardContent>
    </MuiCard>
  );
}
