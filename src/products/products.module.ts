import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductDetails } from '../productdetails/productdetails.entity';
import { ProductsService } from './products.service';
import { ProductDetailsService } from '../productdetails/productdetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products, ProductDetails])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductDetailsService],
})
export class ProductsModule {}
