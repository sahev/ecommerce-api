import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetails, Products } from './products/products.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/database.db',
      entities: [ProductDetails, Products],
      synchronize: true
    }),
  ],
})

export class AppModule { }
