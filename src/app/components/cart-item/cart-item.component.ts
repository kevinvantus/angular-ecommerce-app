import { Component, computed, Input, signal } from '@angular/core';
import { CartItem, Product } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'ec-cart-item',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  quantity = signal(1);
  itemInCart = computed(() =>
    this.cartService.getCart().find((item) => item.id === this.item.id)
  );

  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.id);
  }

  updateQuantity(productId: number, change: number) {
    this.quantity.update((quantity) => quantity + change);
    this.cartService.updateQuantity(productId, change);
  }
}
