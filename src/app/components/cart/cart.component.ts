import { Component, computed, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'ec-cart',
  imports: [ReactiveFormsModule, CurrencyPipe, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  couponApplied = signal(false);
  couponValid = signal(false);
  submitted = signal(false);

  cartItems = computed(() => this.cartService.getCart());
  subtotal = computed(() => this.cartService.getSubtotal());
  orderSummary = computed(() => this.cartService.getOrderSummary());

  form!: FormGroup<{
    couponCode: FormControl<string>;
  }>;

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      couponCode: this.fb.nonNullable.control('', {
        validators: [Validators.required],
      }),
    });
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
