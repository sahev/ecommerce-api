import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsDTO } from './products.dto';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { _400, _404 } from '../global/error'; 

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Promise<Products[]> {
    return this.productsService.getProducts();
  }

  @Get('/:id')
  async getProduct(@Param() param): Promise<Products> {    
    return await this.productsService.getProduct(param.id);
  }

  @Post()
  async insertProduct(@Body() data: ProductsDTO): Promise<any> {    
    return await this.productsService.create(data);
  }

  @Post('/details')
  async insertProductDetails(@Body() data: any): Promise<any> {    
    return await this.productsService.insertProductDetails(data);
  }

  @Delete('/:id')
  async removeProduct(@Param() param: any) {    
    await this.productsService.removeProduct(param.id);
  }
}
