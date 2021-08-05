import { Column, Entity, IsNull, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class ProductDetails {
    @PrimaryGeneratedColumn()
    prd_productdetails: number;
    
    @Column()
    prd_product: number;

    @Column()
    prd_weight: number;
    
    @Column()
    prd_price: number;
    
    @Column({nullable: true})
    prd_discount: number;
    
}
