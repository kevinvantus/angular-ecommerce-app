export interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  couponDiscount: number;
  shipping: number;
  total: number;
}
