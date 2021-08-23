import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "city";

export const OrderTitle = (record: TOrder) => {
  return record.city;
};
