import { Component, computed, Input, signal } from '@angular/core';
import { Product } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateNamePipe } from '../../pipes/translate-product-name.pipe';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ec-product',
  imports: [CurrencyPipe, TranslateModule, TranslateNamePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  currentLang = computed(() => this.appService.currentLang);
  itemInCart = computed(() =>
    this.cartService.getCart().find((item) => item.id === this.product.id)
  );

  @Input() product!: Product;

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

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
  }
}
