import { FunctionComponent, useState } from "react";
import { useMutation } from "react-query";
import { getOrderInfo } from "../../apis";
import TrackerInput from "../TrackerInput/TrackerInput";

const Shipment: FunctionComponent = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState({});
  const { mutateAsync, isLoading } = useMutation(getOrderInfo, {
    onSuccess: ({ data }) => setData(data),
    onError: (error) => console.log(error),
  });
  const onSubmit = async () => {
    await mutateAsync(value);
    setValue("");
  };

  return (
    <div>
      {/*isLoading ? <div>loader</div> : <></>*/}
      <TrackerInput
        defaultValue={value}
        onSubmit={onSubmit}
        setValue={setValue}
      />
    </div>
  );
};
export default Shipment;
