import { FunctionComponent, useState } from "react";
import { useMutation } from "react-query";
import { getOrderInfo } from "../../apis";
import EmptyData from "../EmptyData/EmptyData";
import LoadingSpinner from "../Loader/Loader";
import TrackerInput from "../TrackerInput/TrackerInput";

const Shipment: FunctionComponent = () => {
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [data, setData] = useState({});
  const { mutateAsync, isLoading, isError } = useMutation(getOrderInfo, {
    onSuccess: ({ data }) => setData(data),
  });

  return (
    <div>
      {isLoading ? <LoadingSpinner /> : <></>}
      <TrackerInput
        setOrderNumber={setOrderNumber}
        submitOrderNumber={mutateAsync}
      />
      {isError ? <EmptyData orderNumber={orderNumber} /> : <></>}
    </div>
  );
};
export default Shipment;
