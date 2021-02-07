import { EmailIcon, PhoneIcon } from "@brew-software/react-icons";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useLinkStyles } from "./+styles";

type PhoneLinkProps = {
  phoneNumber: string;
  className?: string;
  style?: CSSProperties;

  classes?: {
    icon?: string;
    link?: string;
  };
};

export default function PhoneLink({
  phoneNumber,
  className,
  style,
  classes = {},
}: PhoneLinkProps) {
  const linkClasses = useLinkStyles();
  const { icon = "", link = "" } = classes;

  return (
    <span
      className={`${linkClasses.root} ${className ?? ""}`}
      style={{ ...style }}
    >
      <PhoneIcon type="solidAlt" className={`${linkClasses.marker} ${icon}`} />
      <a href={`tel:${phoneNumber}`} target="_blank" className={`${link}`}>
        {phoneNumber}
      </a>
    </span>
  );
}
