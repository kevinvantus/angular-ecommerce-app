import { Injectable, signal } from '@angular/core';
import { CartItem, OrderSummary, Product } from '../interfaces';
import { coupons } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cart = signal<CartItem[]>([]);
  #couponDiscount = signal<number>(0);
  #shippingRate = signal<number>(10);

  constructor() {}

  getCart() {
    return this.#cart();
  }

  addToCart(product: Product, quantity = 1) {
    this.#cart.update((cart) => [...cart, { ...product, quantity }]);
  }

  updateQuantity(productId: number, change: number) {
    const updatedItems = this.getCart().map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + change }
        : item
    );
    this.#cart.update(() => updatedItems);
  }

  removeFromCart(productId: number) {
    this.#cart.update((cart) => cart.filter((item) => item.id !== productId));
  }

  clearCart() {
    this.#cart.set([]);
  }

  getSubtotal(): number {
    return this.#cart().reduce((total, item) => {
      const itemPrice = item.price * (1 - (item.discount || 0) / 100);
      return total + itemPrice * item.quantity;
    }, 0);
  }

  getCouponDiscount(code: string) {
    return coupons.get(code.toUpperCase());
  }

  setCouponDiscount(discount: number) {
    this.#couponDiscount.set(discount);
  }

  getCartTotal(): number {
    const subtotal = this.getSubtotal();
    const couponDiscount = (subtotal * this.#couponDiscount()) / 100;
    const shipping = this.#shippingRate();

    return subtotal - couponDiscount + shipping;
  }

  getOrderSummary(): OrderSummary {
    const subtotal = this.getSubtotal();
    const couponDiscount = (subtotal * this.#couponDiscount()) / 100;
    const shipping = this.#shippingRate();

    return {
      subtotal,
      couponDiscount,
      shipping,
      total: subtotal - couponDiscount + shipping,
    };
  }
}
