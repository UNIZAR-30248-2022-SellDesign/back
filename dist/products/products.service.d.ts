import { Model } from 'mongoose';
import { Product } from './products.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    sameNameDesign(id: any): Promise<(Product & Required<{
        _id: string;
    }>)[]>;
    getProduct(id: String): Promise<Product & Required<{
        _id: string;
    }>>;
    getProducts(id: String): Promise<Product & Required<{
        _id: string;
    }>>;
}
