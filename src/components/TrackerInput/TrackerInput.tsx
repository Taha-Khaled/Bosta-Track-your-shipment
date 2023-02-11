import { useTranslation } from "react-i18next";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./TrackerInput.module.scss";
const TrackerInput = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.TrackerInput}>
      <h1>{t("trackShipment")}</h1>
      <div className={styles.inputHolder}>
        <input
          className={styles.input}
          placeholder={t("trackingNo") as string}
        />
        <button
          className={styles.submetBtn}
          onClick={undefined}
          dir={i18n.dir()}
        >
          <SearchIcon fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default TrackerInput;
