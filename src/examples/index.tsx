import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import StatusChipExamples from "./status-chip-examples";

const theme = createMuiTheme();

export default function Examples() {
  return (
    <ThemeProvider theme={theme}>
      <StatusChipExamples />
    </ThemeProvider>
  );
}
