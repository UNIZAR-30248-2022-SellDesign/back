import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    homeProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    homeProductsByPrice(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    homeProductsByType(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    homeProductsByPrice_Type(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    buscarProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    buscarProductsPorPrecio(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    getProductByID(params: any): Promise<import("./products.model").Product & Required<{
        _id: string;
    }>>;
    addProduct(body: any): Promise<any>;
}
