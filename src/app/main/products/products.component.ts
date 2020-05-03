import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.products$ = this.mainService.getProduct();
  }
}
