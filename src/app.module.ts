import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductDetailsModule } from './productdetails/productdetails.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products/products.entity';
import { ProductDetails } from './productdetails/productdetails.entity';

@Module({
  imports: [
    ProductsModule,
    ProductDetailsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/database.db',
      entities: [ProductDetails, Products],
      synchronize: true
    }),
  ],
})

export class AppModule { }
