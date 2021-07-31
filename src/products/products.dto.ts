export class ProductsDTO {
    products: {
        pro_name: string;
        pro_description: string;
        pro_category: string;
        details: [{
            prd_product: number;
            prd_weight: number;
            prd_price: number;
            prd_discount: number;
        }],
        pro_src: []
    }
}