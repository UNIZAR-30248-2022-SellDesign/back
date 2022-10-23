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
    getProducts(page: number): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    buscarProducts(busqueda: any, page: any): Promise<Omit<Product & Required<{
        _id: string;
    }>, never>[]>;
    addProduct(precio: any, design: any, image: any, tipo: any, description: any): Promise<any>;
}
