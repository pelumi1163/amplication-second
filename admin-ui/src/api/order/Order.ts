import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  city: string | null;
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
