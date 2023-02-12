import { FunctionComponent, useState } from "react";
import { useMutation } from "react-query";
import { getOrderInfo } from "../../apis";
import { IData } from "../../types";
import EmptyData from "../EmptyData/EmptyData";
import LoadingSpinner from "../Loader/Loader";
import ShipmentInfo from "../ShipmentInfo/ShipmentInfo";
import TrackerInput from "../TrackerInput/TrackerInput";
import styles from "./Shipment.module.scss";
const Shipment: FunctionComponent = () => {
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [data, setData] = useState<IData>();
  const { mutateAsync, isLoading, isError } = useMutation(getOrderInfo, {
    onSuccess: ({ data }) => setData(data),
    onError: () => setData(undefined),
  });

  return (
    <div className={styles.shipment}>
      {isLoading ? <LoadingSpinner /> : <></>}
      <TrackerInput
        setOrderNumber={setOrderNumber}
        submitOrderNumber={mutateAsync}
      />
      {data ? (
        <div>
          <ShipmentInfo data={data} />
        </div>
      ) : (
        <></>
      )}
      {isError ? <EmptyData orderNumber={orderNumber} /> : <></>}
    </div>
  );
};
export default Shipment;
