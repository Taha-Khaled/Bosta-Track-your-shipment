import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import {
  dateDiffInDays,
  getArDate,
  getEnDate,
} from "../../helpers/dateTransformers";
import { IData } from "../../types";
import styles from "./ShipmentInfo.module.scss";
interface IShipmentInfo {
  data: IData;
}

const ShipmentInfo: FunctionComponent<IShipmentInfo> = ({ data }) => {
  const { t, i18n } = useTranslation();
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
