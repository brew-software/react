import { Grid } from "@material-ui/core";
import { StatusChip } from "../lib/components";

export default function StatusChipExamples() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <StatusChip type="success" label="Success" />
      </Grid>
      <Grid item>
        <StatusChip type="error" label="Failed" />
      </Grid>
      <Grid item>
        <StatusChip type="standard" label="Standard" />
      </Grid>
      <Grid item>
        <StatusChip type="info" label="Information" />
      </Grid>
    </Grid>
  );
}
