import { Injectable } from '@nestjs/common';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDetailsDTO } from './ProductDetails.dto';
import { ProductDetails } from './productdetails.entity';

@Injectable()
export class ProductDetailsService {

  constructor(
    @InjectRepository(ProductDetails) private productDetailsRepository: Repository<ProductDetails>) { }

  async create(data: ProductDetailsDTO[]) {
    return await this.productDetailsRepository.save(data);
  }

  async insertProductDetails(data: any) {
    return await this.productDetailsRepository.save( data );
  }

  async removeProductDetails(id: number) {
    await this.productDetailsRepository.delete({ prd_product: id });
  }
}
