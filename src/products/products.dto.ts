import { ProductDetailsDTO } from "src/productdetails/ProductDetails.dto";

export class ProductsDTO {
    pro_product: number;
    pro_name: string;
    pro_description: string;
    pro_category: string;
    pro_src: string[];
    pro_details?: Array<ProductDetailsDTO>

}