import { Component, computed, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services/app.service';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { TranslateNamePipe } from '../../pipes/translate-product-name.pipe';

@Component({
  selector: 'ec-cart',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    TranslateModule,
    CartItemComponent,
    TranslateNamePipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  couponApplied = signal(false);
  couponValid = signal(false);
  submitted = signal(false);
  currentLang = computed(() => this.appService.currentLang);

  cartItems = computed(() => this.cartService.getCart());
  subtotal = computed(() => this.cartService.getSubtotal());
  orderSummary = computed(() => this.cartService.getOrderSummary());

  form!: FormGroup<{
    couponCode: FormControl<string>;
  }>;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private translate: TranslateService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      couponCode: this.fb.nonNullable.control('', {
        validators: [Validators.required],
      }),
    });

    this.translate.addLangs(['en', 'fr', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  get couponCode() {
    return this.form.controls.couponCode.value;
  }

  applyCoupon() {
    const discount = this.cartService.getCouponDiscount(this.couponCode);

    if (!discount) {
      this.couponValid.set(false);
      this.cartService.setCouponDiscount(0);
    } else {
      this.cartService.setCouponDiscount(discount);
      this.couponValid.set(true);
    }
    this.couponApplied.set(true);
  }
}
