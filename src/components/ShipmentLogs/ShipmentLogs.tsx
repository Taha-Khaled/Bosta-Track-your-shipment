import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { getArDate, getEnDate, getTime } from "../../helpers/dateTransformers";
import { IData, TransitEvent } from "../../types";
import LogCard from "../LogCard/LogCard";
import styles from "./ShipmentLogs.module.scss";
interface IShipmentLogs {
  data: IData;
}
const ShipmentLogs: FunctionComponent<IShipmentLogs> = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.shipmentLogs}>
      <div className={styles.container}>
        <span className={styles.activityLog}>{t("activityLog")}</span>
        <ul className={styles.listHolder}>
          {data?.TransitEvents?.map((log: TransitEvent) => (
            <li className={styles.listItem}>
              <div className={styles.marker}>
                <div className={styles.circle} />
                <div className={styles.border} dir={i18n.dir()} />
              </div>
              <div className={styles.content}>
                {log?.timestamp ? (
                  <div className={styles.timestamp}>
                    {i18n.language == "en"
                      ? getEnDate(log.timestamp, true)
                      : getArDate(log.timestamp, true)}
                  </div>
                ) : (
                  <></>
                )}
                {log?.state ? (
                  <LogCard log={log?.state} timestamp={log.timestamp} />
                ) : (
                  <></>
                )}
                {log?.hub ? (
                  <LogCard log={log?.hub} timestamp={log.timestamp} />
                ) : (
                  <></>
                )}
                {log?.reason ? (
                  <LogCard log={log?.reason} timestamp={log.timestamp} />
                ) : (
                  <></>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShipmentLogs;
