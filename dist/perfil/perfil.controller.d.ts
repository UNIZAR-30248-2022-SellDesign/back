import { ProductsService } from '../products/products.service';
export declare class PerfilController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getUserProducts(params: any): Promise<(import("../products/products.model").Product & Required<{
        _id: string;
    }>)[]>;
    getUserFavProducts(params: any): Promise<(import("../products/fav.model").Fav & Required<{
        _id: string;
    }>)[]>;
}
