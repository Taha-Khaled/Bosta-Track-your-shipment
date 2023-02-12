import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { IData } from "../../types";
import styles from "./ShipmentInfo.module.scss";
interface IShipmentInfo {
  data: IData;
}
const ShipmentInfo: FunctionComponent<IShipmentInfo> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const getEnDate = (timestamp: Date) => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "short" });
    const dayofweek = weekday[date.getDay()];
    const day = date.getDate();
    return `${dayofweek}, ${day} ${month} ${year}`;
  };
  const getArDate = (timestamp: Date) => {
    const date = new Date(timestamp);
    const dateString_Ar = date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return dateString_Ar;
  };
  function dateDiffInDays(timestamp: Date) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      targetDate.getDate()
    );
    const utc2 = Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  return (
    <div className={styles.shipmentInfo}>
      <h3>{`${t("shipNo")} ${data?.TrackingNumber}`}</h3>
      <h1>{t(data?.CurrentStatus?.state)}</h1>
      <div
        className={styles.trackingBar}
        bar-status={data?.CurrentStatus?.state}
      >
        <hr />
        <hr />
        <hr />
      </div>
      <span className={styles.transitEvents}>
        <span>{t(data?.TransitEvents[0].state)}</span>
        <span>
          {i18n.language == "ar"
            ? getArDate(data?.TransitEvents[0].timestamp)
            : getEnDate(data?.TransitEvents[0].timestamp)}
        </span>
      </span>
      <span className={styles.lastShipmentInfo}>
        {`(${t("lastUpate")} ${dateDiffInDays(
          data?.TransitEvents[0].timestamp
        )} ${t("dayAgo")}.)`}
      </span>
      <div className={styles.br}></div>
    </div>
  );
};
export default ShipmentInfo;