import { Location } from "history";
import { ReactNode, useEffect, useState } from "react";
import { Prompt, useHistory } from "react-router";
import ConfirmDialog from "../modals/confirm-dialog";

type RouteLeavingGuardProps = {
  shouldBlockNavigation: (location: Location) => boolean;
  confirmTitle?: ReactNode;
  confirmContent?: ReactNode;
  confirmButton?: ReactNode;
  cancelButton?: ReactNode;
  primaryAction?: "confirm" | "cancel";
};

export default function RouteLeavingGuard({
  shouldBlockNavigation,
  confirmTitle = "Are you sure you want to leave?",
  confirmContent = "Are you sure you want to navigation away from the page",
  confirmButton = "Leave Page",
  cancelButton = "Stay Here",
  primaryAction = "cancel",
}: RouteLeavingGuardProps) {
  const [visible, setVisible] = useState(false);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);
  const [navigationConfirmed, setNavigationConfirmed] = useState(false);
  const history = useHistory();

  const handleClose = () => setVisible(false);

  const handleBlockNavigation = (location: Location) => {
    if (!navigationConfirmed && shouldBlockNavigation(location)) {
      setVisible(true);
      setLastLocation(location);
      return false;
    }

    return true;
  };

  const handleConfirmNavigation = () => {
    setVisible(false);
    setNavigationConfirmed(true);
  };

  useEffect(() => {
    if (navigationConfirmed && lastLocation) {
      history.push(lastLocation.pathname);
    }
  }, [navigationConfirmed, lastLocation, history]);

  return (
    <>
      <Prompt message={handleBlockNavigation} />

      <ConfirmDialog
        open={visible}
        title={confirmTitle}
        content={confirmContent}
        cancelButton={cancelButton}
        confirmButton={confirmButton}
        onConfirm={handleConfirmNavigation}
        onClose={handleClose}
        primaryAction={primaryAction}
      />
    </>
  );
}
