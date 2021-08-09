import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/products/products.entity';
import { ProductDetails } from './productdetails.entity';
import { ProductDetailsService } from './productdetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetails, Products])],
  providers: [ProductDetailsService],
  exports: [ProductDetailsService]
})
export class ProductDetailsModule {}
