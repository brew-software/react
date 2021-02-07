import { CSSProperties, useMemo } from "react";
import {
  DayOfWeek,
  DeliveryOptions,
  formatDelivery,
  formatFulfillment,
  FulfillmentPeriod,
  WeekInMonth,
} from "@brew-software/shared-models";

type DeliveryDisplayProps = {
  style?: CSSProperties;
  className?: string;
  deliveryOptions: DeliveryOptions;
  period?: FulfillmentPeriod;
  dayOfWeek?: DayOfWeek;
  weekInMonth?: WeekInMonth;
};

export default function DeliveryDisplay({
  style,
  className = "",
  deliveryOptions,
  period,
  dayOfWeek,
  weekInMonth,
}: DeliveryDisplayProps) {
  const deliveryDisplay = useMemo(() => formatDelivery(deliveryOptions), [
    deliveryOptions,
  ]);
  const fulfillmentDisplay = useMemo(
    () =>
      period && dayOfWeek !== undefined
        ? formatFulfillment({
            frequency: period,
            dayOfWeek,
            weekInMonth,
          })
        : "",
    [period, dayOfWeek, weekInMonth]
  );
  const display = useMemo(
    () =>
      `${deliveryDisplay}${fulfillmentDisplay ? ` ${fulfillmentDisplay}` : ""}`,
    [deliveryDisplay, fulfillmentDisplay]
  );

  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: display }}
    />
  );
}
