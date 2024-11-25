import { Component, computed, Input, signal } from '@angular/core';
import { CartItem, Product } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateNamePipe } from '../../pipes/translate-product-name.pipe';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ec-cart-item',
  imports: [CurrencyPipe, NgClass, TranslateModule, TranslateNamePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  quantity = signal(1);
  itemInCart = computed(() =>
    this.cartService.getCart().find((item) => item.id === this.item.id)
  );
  currentLang = computed(() => this.appService.currentLang);

  @Input() item!: CartItem;

  constructor(
    private cartService: CartService,
    private translate: TranslateService,
    private appService: AppService
  ) {
    this.translate.addLangs(['en', 'fr', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

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
