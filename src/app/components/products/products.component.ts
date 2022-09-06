import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product = {
    title: 'Samsung Galaxy S22',
    description: 'SAMSUNG Galaxy S22 5G 128 GB Phantom Black Dual SIM',
    image:
      'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91399405/fee_786_587_png',
    price: 849,
    available: true,
  };
  productsArr = [this.product];
  isAdding = false;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i <= 10; i++) {
      this.productsArr.push({
        ...this.product,
        price: this.product.price * i,
      });
    }
  }

  addNewProduct(
    title: string,
    description: string,
    image: string,
    price: number
  ) {
    this.productsArr.push({
      title: title,
      description: description,
      image: image,
      price: price,
      available: true,
    });
    console.log(this.productsArr);
    this.isAdding = false;

    return false;
  }
}
