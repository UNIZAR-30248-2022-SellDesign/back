import { Model } from 'mongoose';
import { Fav } from './fav.model';
import { Product } from './products.model';
export declare class ProductsService {
    private readonly productModel;
    private readonly favModel;
    constructor(productModel: Model<Product>, favModel: Model<Fav>);
    getProductByID(id: any): Promise<Product & Required<{
        _id: string;
    }>>;
    getProductByDesign(designId: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
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
    getUserFavProducts(id: any, page: any): Promise<(Fav & Required<{
        _id: string;
    }>)[]>;
    getUserProducts(id: any, page: any): Promise<(Product & Required<{
        _id: string;
    }>)[]>;
    searchProducts(name: any, page: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    searchProductsByPrice(name: any, min: any, max: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    addProduct(price: any, design: any, image: any, type: any, description: any, seller: any): Promise<any>;
}
