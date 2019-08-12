import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Get()
  getProducts(): IProduct[] {
    return this.productsService.getProducts();
  }
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): IProduct {
    return this.productsService.createProduct(createProductDto);
  }
  @Put()
  updateProduct(@Body() createProductDto: CreateProductDto): IProduct {
    return this.productsService.updateProduct(createProductDto);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id): object {
    return this.productsService.deleteProduct(id);
  }
}
