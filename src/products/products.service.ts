import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel) {}

  async getProducts(): Promise<IProduct[]> {
    return await this.productModel.find();
  }
  async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = this.productModel(product);
    return await newProduct.save();
  }
  async updateProduct(id: string, product: IProduct): Promise<IProduct> {
    return await this.productModel.findByIdAndUpdate(id, product, {new: true});
  }
  async deleteProduct(id: string): Promise<IProduct> {
    return await this.productModel.findByIdAndDelete(id)
  }
}
