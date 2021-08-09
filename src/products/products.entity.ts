import { ProductDetails } from "../productdetails/productdetails.entity";
import { Column, Entity, IsNull, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Products {
    @PrimaryGeneratedColumn()
    @OneToMany(type => ProductDetails, prd => prd.prd_product)
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

// @Entity()
// export class User {

//  @OneToMany(type => Post, post => post.user)
//  posts: Post[];
// }

// @Entity()
// export class Post {

//  @PrimaryGeneratedColumn()
//  id: number;

//  @Column()
//  user_id: number;

//  @ManyToOne(type => User)
//  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
//  user: User;

// }

