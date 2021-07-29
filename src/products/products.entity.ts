import { Column, Entity, IsNull, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Products {
    @PrimaryGeneratedColumn()
    @OneToMany(() => ProductDetails, (productdetails) => productdetails.prd_product )
    pro_product: number;

    @Column()
    pro_name: string;
    
    @Column()
    pro_description: string;
    
    @Column()
    pro_category: string;
    
}

@Entity() 
export class ProductDetails {
    @PrimaryGeneratedColumn()
    prd_productdetails: number;
    
    @Column()
    @ManyToOne(() => Products, product => product.pro_product)
    prd_product: number;

    @Column()
    prd_weight: number;
    
    @Column()
    prd_price: number;
    
    @Column({nullable: true})
    prd_discount: number;

    @Column({nullable: true})
    prd_src: string;
    
}