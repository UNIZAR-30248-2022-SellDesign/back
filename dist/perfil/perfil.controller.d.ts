import { ProductsService } from '../products/products.service';
export declare class PerfilController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getUserProducts(params: any): Promise<Omit<import("../products/products.model").Product & Required<{
        _id: string;
    }>, never>[]>;
    getUserFavProducts(params: any): Promise<Omit<import("../products/fav.model").Fav & Required<{
        _id: string;
    }>, never>[]>;
}
