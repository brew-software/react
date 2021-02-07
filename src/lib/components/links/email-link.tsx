import { EmailIcon } from "@brew-software/react-icons";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useLinkStyles } from "./+styles";

type EmailLinkProps = {
  email: string;
  className?: string;
  style?: CSSProperties;

  classes?: {
    icon?: string;
    link?: string;
  };
};

export default function EmailLink({
  email,
  className,
  style,
  classes = {},
}: EmailLinkProps) {
  const linkClasses = useLinkStyles();
  const { icon = "", link = "" } = classes;

  return (
    <span
      className={`${linkClasses.root} ${className ?? ""}`}
      style={{ ...style }}
    >
      <EmailIcon type="regular" className={`${linkClasses.marker} ${icon}`} />
      <a href={`mailto:${email}`} target="_blank" className={`${link}`}>
        {email}
      </a>
    </span>
  );
}
