import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { getTime } from "../../helpers/dateTransformers";
import styles from "./LogCard.module.scss";

interface ILogCard {
  log: string;
  timestamp: Date;
}
const LogCard: FunctionComponent<ILogCard> = ({ log, timestamp }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.infoCard}>
      <div className={styles.log}>{t(log)}</div>
      <div className={styles.time}>
        {i18n.language == "ar"
          ? getTime(timestamp, "ar-EG")
          : getTime(timestamp, "en-US")}
      </div>
    </div>
  );
};
export default LogCard;
