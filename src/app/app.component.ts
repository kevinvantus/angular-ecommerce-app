import { Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'ec-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cart = computed(() => this.cartService.getCart());

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
}
