import { Products } from "src/products/products.entity";
import { Column, Entity, IsNull, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class ProductDetails {
    @PrimaryGeneratedColumn()
    prd_productdetails: number;
    
    @Column()
    @ManyToOne(type => Products, pro => pro.pro_product)
    @JoinColumn({name: 'prd_product', referencedColumnName: 'pro_product'})
    prd_product: number;

    @Column()
    prd_weight: number;
    
    @Column()
    prd_price: number;
    
    @Column({nullable: true})
    prd_discount: number;
    
}


