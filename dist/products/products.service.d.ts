import { Model } from 'mongoose';
import { Product } from './products.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getProductByID(id: any): Promise<Product & Required<{
        _id: string;
    }>>;
    getHomeProducts(page: number): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    getHomeProductsByPrice(min: any, max: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    getHomeProductsByType(typeID: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    getHomeProductsByPrice_Type(min: any, max: any, typeID: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    searchProducts(name: any, page: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    searchProductsByPrice(name: any, min: any, max: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    addProduct(precio: any, design: any, image: any, tipo: any, description: any): Promise<any>;
}
