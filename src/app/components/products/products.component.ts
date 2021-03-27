import { Component, OnInit } from '@angular/core';
import { products } from '../../mocks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  productList = products;

  ngOnInit(): void {}
}
