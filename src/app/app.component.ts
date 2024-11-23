import { Component, computed, signal } from '@angular/core';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartService } from './services/cart.service';
import { NgClass } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'ec-root',
  imports: [NgClass, ProductsListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cart = computed(() => this.cartService.getCart());
  isCartOpen = signal(false);

  constructor(private cartService: CartService) {}

  toggleCart() {
    this.isCartOpen.update((value) => !value);
  }
}
