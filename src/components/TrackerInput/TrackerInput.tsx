import {
  AllHTMLAttributes,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./TrackerInput.module.scss";
interface ITrackerInput extends AllHTMLAttributes<HTMLInputElement> {
  onSubmit: () => void;
  setValue: Dispatch<SetStateAction<string>>;
}
const TrackerInput: FunctionComponent<ITrackerInput> = ({
  onSubmit,
  setValue,
  ...rest
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.TrackerInput}>
      <h1>{t("trackShipment")}</h1>
      <div className={styles.inputHolder}>
        <input
          className={styles.input}
          placeholder={t("trackingNo") as string}
          onChange={(e) => setValue(e.target.value)}
          {...rest}
        />
        <button
          className={styles.submetBtn}
          onClick={() => onSubmit()}
          dir={i18n.dir()}
        >
          <SearchIcon fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default TrackerInput;
