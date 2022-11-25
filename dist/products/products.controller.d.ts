import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getUserDesigns(params: any): Promise<any>;
    homeProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    homeProductsByPrice(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    homeProductsByType(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[] | "No existen productos de este tipo">;
    homeProductsByPrice_Type(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[] | "No existen productos de este tipo">;
    buscarProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    buscarProductsPorPrecio(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    getProductByID(params: any): Promise<import("./products.model").Product & Required<{
        _id: string;
    }>>;
    allProductDesign(params: any): Promise<any>;
    addProduct(price: string, design: string, image: string, type: string, description: string, seller: string): Promise<any>;
    updateProduct(_id: string, price: string, design: string, image: string, type: string, description: string): Promise<any>;
    deleteProduct(params: any): Promise<boolean>;
}
