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
    getHomeProductsByType(typeID: number): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[] | "No existen productos de este tipo">;
    getHomeProductsByPrice_Type(min: any, max: any, typeID: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[] | "No existen productos de este tipo">;
    getUserFavProducts(id: any, page: any): Promise<(Fav & Required<{
        _id: string;
    }>)[]>;
    getIfUserFavProduct(id: any, product: any): Promise<(Fav & Required<{
        _id: string;
    }>)[]>;
    postIfUserFavProduct(id: any, product: any): Promise<(Fav & Required<{
        _id: string;
    }>) | (Fav & Required<{
        _id: string;
    }>)[]>;
    deleteIfUserFavProduct(id: any, product: any): Promise<boolean>;
    getUserProducts(id: any, page: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    searchProducts(name: any, page: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    searchProductsByPrice(name: any, min: any, max: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    newProduct(price: any, design: any, image: any, typeID: any, description: any, seller: any): Promise<any>;
    updateProduct(_id: string, price: string, design: string, image: string, typeID: any, description: string): Promise<any>;
    deleteProduct(_id: any, seller: any): Promise<boolean>;
}
