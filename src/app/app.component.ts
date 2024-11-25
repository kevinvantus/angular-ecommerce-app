import { Component, computed, signal } from '@angular/core';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartService } from './services/cart.service';
import { NgClass } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'ec-root',
  imports: [NgClass, ProductsListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cart = computed(() => this.cartService.getCart());
  isCartOpen = signal(false);

  constructor(
    private cartService: CartService,
    private translate: TranslateService,
    private appService: AppService
  ) {}

  useLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value;
    this.translate.use(language);
    this.appService.currentLang = language;
  }

  toggleCart() {
    this.isCartOpen.update((value) => !value);
  }
}
