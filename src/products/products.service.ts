import { Injectable } from '@nestjs/common';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDTO } from './products.dto';
import { Products, ProductDetails } from './products.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productsRepository: Repository<Products>,
    @InjectRepository(ProductDetails) private productDetailsRepository: Repository<ProductDetails>) { }

  async getProducts(): Promise<Products[]> {
    return await getRepository(Products).find({ relations: ['pro_product'] });
  }

  async getProduct(id: number): Promise<Products> {
    return await getRepository(Products).findOne({ pro_product: id }, { relations: ['pro_product'] } );
  }

  async create(data: ProductsDTO) {

    const product = await this.productsRepository.save(data.products);
    data.products.details.forEach(prod => {
      prod.prd_product = product.pro_product;
    });  

    this.productDetailsRepository.save(data.products.details);

    return { product }
  }

  async insertProductDetails(data: any) {
    return await this.productDetailsRepository.save( data );
  }

  async removeProduct(id: number) {
    await this.productDetailsRepository.delete({ prd_product: id });
    await this.productsRepository.delete(id);
  }
}
