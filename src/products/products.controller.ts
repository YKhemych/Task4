import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Get()
  getProducts(): Promise<IProduct[]> {
    return this.productsService.getProducts();
  }
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<IProduct> {
    return this.productsService.createProduct(createProductDto);
  }
  @Put(':id')
  updateProduct(@Param('id') id, @Body() createProductDto: CreateProductDto): Promise<IProduct> {
    return this.productsService.updateProduct(id, createProductDto);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<IProduct> {
    return this.productsService.deleteProduct(id);
  }
}
