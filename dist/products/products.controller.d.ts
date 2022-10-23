import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    buscarProducts(params: any): Promise<Omit<import("./products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    addProduct(body: any): Promise<any>;
}
