import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetails } from './productdetails.entity';
import { ProductDetailsService } from './productdetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetails])],
  providers: [ProductDetailsService],
  exports: [ProductDetailsService]
})
export class ProductDetailsModule {}
