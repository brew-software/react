import { MapMarkerIcon } from "@brew-software/react-icons";
import { Address, formatAddress } from "@brew-software/shared-models";
import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useLinkStyles } from "./+styles";

type GoogleMapLinkProps = {
  location: Address;
  className?: string;
  style?: CSSProperties;

  classes?: {
    icon?: string;
    link?: string;
  };
};

export default function GoogleMapLink({
  location,
  className,
  style,
  classes = {},
}: GoogleMapLinkProps) {
  const linkClasses = useLinkStyles();
  const locationFormat = formatAddress(location);
  const { icon = "", link = "" } = classes;

  return (
    <span
      className={`${linkClasses.root} ${className ?? ""}`}
      style={{ ...style }}
    >
      <MapMarkerIcon
        type="solidAlt"
        className={`${linkClasses.marker} ${icon}`}
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
