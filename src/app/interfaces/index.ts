export interface Product {
  id: number;
  names: Record<string, string>;
  price: number;
  discount?: number;
  currency: Record<string, string>;
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
