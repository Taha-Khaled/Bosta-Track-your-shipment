import axios from "axios";
export const getOrderInfo = (orderNumber: string) => {
  const data = axios.get(
    `https://tracking.bosta.co/shipments/track/${orderNumber}`
  );
  return data;
};
