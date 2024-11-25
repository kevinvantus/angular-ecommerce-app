import { Component } from '@angular/core';
import { sampleProducts } from '../../data';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'ec-products-list',
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products = sampleProducts;
}
