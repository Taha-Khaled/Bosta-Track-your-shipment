import {
  AllHTMLAttributes,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./TrackerInput.module.scss";
interface ITrackerInput extends AllHTMLAttributes<HTMLInputElement> {
  submitOrderNumber: (orderNumber: string) => void;
  setOrderNumber: (orderNumber: string) => void;
}
const TrackerInput: FunctionComponent<ITrackerInput> = ({
  submitOrderNumber,
  setOrderNumber,
  ...rest
}) => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState<string>("");
  const handelSubmit = () => {
    setOrderNumber(value);
    submitOrderNumber(value);
  };
  return (
    <div className={styles.TrackerInput}>
      <h1>{t("trackShipment")}</h1>
      <div className={styles.inputHolder}>
        <input
          className={styles.input}
          placeholder={t("trackingNo") as string}
          onChange={(e) => setValue(e.target.value)}
          defaultValue={value}
          {...rest}
        />
        <button
          className={styles.submetBtn}
          onClick={handelSubmit}
          dir={i18n.dir()}
        >
          <SearchIcon fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default TrackerInput;
