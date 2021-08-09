import { Injectable } from '@nestjs/common';
import { createQueryBuilder, getManager, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDTO } from './products.dto';
import { Products } from './products.entity';
import { ProductDetails } from '../ProductDetails/ProductDetails.entity';
import { _404 } from 'src/global/error';
import { ProductDetailsService } from 'src/productdetails/productdetails.service';
import { ProductDetailsDTO } from 'src/productdetails/ProductDetails.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productsRepository: Repository<Products>,
    @InjectRepository(ProductDetails) private productDetailsRepository: Repository<ProductDetails>,
    private productDetailsService: ProductDetailsService) { }

  async getProducts(): Promise<ProductsDTO[]> {
    return await this.productsRepository.find({relations: ["pro_product"]})
  }

  async getProduct(id: number): Promise<ProductsDTO> {

    var pro: ProductsDTO;
    const product = await getRepository(Products).findOne({ pro_product: id })
    const details = await this.productDetailsRepository.find({ prd_product: id });

    try {
      pro = product;
      pro.pro_details = details;
      return pro;
    } catch {
      throw _404("Produto não encontrado")
    }
  }

  async create(data: ProductsDTO) {
    const product = await this.productsRepository.save(data);
    data.pro_details.forEach(d => d.prd_product = product.pro_product)
    this.productDetailsService.create(data.pro_details);

    return { product }
  }

  async removeProduct(id: number) {
    await this.productDetailsRepository.delete({ prd_product: id });
    await this.productsRepository.delete(id);
  }
}
