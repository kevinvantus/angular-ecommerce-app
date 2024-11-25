import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'ec-home',
  imports: [NgClass, ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isCartOpen = signal(false);
}
