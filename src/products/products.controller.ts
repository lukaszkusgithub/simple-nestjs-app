import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get('/all')
  getProducts() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getById(parseInt(id));
  }

  @Post('/create')
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body.title, body.price);
  }

  @Delete('/delete/:id')
  @HttpCode(204)
  deleteProduct(@Param('id') id: string) {
    this.productsService.deleteProduct(parseInt(id));
  }

  @Patch('/update/:id')
  updateProduct(@Param('id') id: string, @Body() body: CreateProductDto) {
    return this.productsService.updateProduct(
      parseInt(id),
      body.title,
      body.price,
    );
  }
}
