import {
  CheckmarkIcon,
  TimesIcon,
  CircleIcon,
  InfoIcon,
} from "@brew-software/react-icons";
import {
  Chip,
  ChipProps,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

type StatusChipProps = PropsWithChildren<{
  type?: "success" | "error" | "info" | "standard";
  size?: ChipProps["size"];
  label?: ReactNode;
}>;

const useStyles = makeStyles(() => ({
  root: {
    letterSpacing: ".5px",
  },
  icon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function StatusChip({
  type = "standard",
  size = "small",
  label,
}: StatusChipProps) {
  const theme = useTheme();
  const classes = useStyles();
  const { icon, ...styles } = getColorInfo(theme, type);

  return (
    <Chip
      variant="outlined"
      size={size}
      label={label}
      style={styles}
      icon={icon}
      classes={classes}
    />
  );
}

const colorMap: {
  [K in Exclude<StatusChipProps["type"], undefined>]: (theme: Theme) => {
    borderColor: string;
    color: string;
    icon?: ReactElement;
  };
} = {
  success: (theme) => ({
    borderColor: theme.palette.success.dark,
    color: theme.palette.success.dark,
    icon: (
      <span style={{ color: theme.palette.success.dark }}>
        <CheckmarkIcon type="solidCircle" />
      </span>
    ),
  }),

  error: (theme) => ({
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    icon: (
      <span style={{ color: theme.palette.error.main }}>
        <TimesIcon type="solidCircle" />
      </span>
    ),
  }),

  info: (theme) => ({
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
    icon: (
      <span style={{ color: theme.palette.info.main }}>
        <InfoIcon type="solidCircle" />
      </span>
    ),
  }),

  standard: (theme) => ({
    borderColor: theme.palette.grey[500],
    color: theme.palette.grey[600],
    icon: (
      <span style={{ color: theme.palette.grey[500] }}>
        <CircleIcon type="regularDot" />
      </span>
    ),
  }),
};

function getColorInfo(
  theme: Theme,
  type: StatusChipProps["type"]
): {
  borderColor: string;
  color: string;
  icon?: ReactElement;
} {
  return colorMap[type ?? "standard"](theme);
}
