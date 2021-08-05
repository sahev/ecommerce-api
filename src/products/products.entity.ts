import { Column, Entity, IsNull, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Products {
    @PrimaryGeneratedColumn()
    pro_product: number;

    @Column()
    pro_name: string;
    
    @Column()
    pro_description: string;
    
    @Column()
    pro_category: string;
    
    @Column("simple-array", { nullable: true })
    pro_src: Array<string>;

}