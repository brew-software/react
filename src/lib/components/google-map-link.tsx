import { MapMarkerIcon } from "@brew-software/react-icons";
import { Address, formatAddress } from "@brew-software/shared-models";
import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

type GoogleMapLinkProps = {
  location: Address;
  className?: string;
  style?: CSSProperties;

  classes?: {
    marker?: string;
    link?: string;
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },

  marker: {
    marginRight: theme.spacing(2),
  },
}));

export default function GoogleMapLink({
  location,
  className,
  style,
  classes = {},
}: GoogleMapLinkProps) {
  const mainClasses = useStyles();
  const locationFormat = formatAddress(location);
  const { marker = "", link = "" } = classes;

  return (
    <span
      className={`${mainClasses.root} ${className ?? ""}`}
      style={{ ...style }}
    >
      <MapMarkerIcon
        type="solidAlt"
        className={`${mainClasses.marker} ${marker}`}
      />
      <a
        href={`https://maps.google.com/?q=${locationFormat}`}
        target="_blank"
        className={`${link}`}
      >
        {locationFormat}
      </a>
    </span>
  );
}
