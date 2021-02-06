import { CircularProgress, CircularProgressProps } from "@material-ui/core";

export default function LoadingIndicator(props: CircularProgressProps) {
  return <CircularProgress {...props} />;
}
