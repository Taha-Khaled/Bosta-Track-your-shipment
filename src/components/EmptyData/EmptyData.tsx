import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import ErrorIcon from "../../assets/ErrorIcon";
import styles from "./EmptyData.module.scss";

interface IEmptyData {
  orderNumber: string | number;
}
const EmptyData: FunctionComponent<IEmptyData> = ({ orderNumber }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.EmptyData}>
      <h3>{`${t("shipNo")} ${orderNumber}`}</h3>
      <div className={styles.errorMsg}>
        <span>
          <ErrorIcon fontSize={20} />
        </span>
        <p>{t("errorMsg")}</p>
      </div>
    </div>
  );
};

export default EmptyData;
