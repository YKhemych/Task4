import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  getProducts(): IProduct[] {
    return [
      {
        id: 1,
        name: 'apple',
        description: 'some description',
      },
      {
        id: 2,
        name: 'banana',
        description: 'some description',
      },
    ];
  }
  createProduct(product: IProduct): IProduct {
    return product;
  }
  updateProduct(product: IProduct): IProduct {
    return product;
  }
  deleteProduct(id: string): object {
    return {message: `delete product with id ${id} was success`};
  }
}
