import { Component, computed, Input, signal } from '@angular/core';
import { Product } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'ec-product',
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  itemInCart = computed(() =>
    this.cartService.getCart().find((item) => item.id === this.product.id)
  );

  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
  }
}
