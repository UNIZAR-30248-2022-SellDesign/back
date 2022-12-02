import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartsService;
    constructor(cartsService: CartService);
    getUserCartProducts(params: any): Promise<(import("./cart.model").Cart & Required<{
        _id: string;
    }>)[]>;
    addProductToCart(params: any): Promise<import("./cart.model").Cart & Required<{
        _id: string;
    }>>;
    removeProductFromCart(params: any): Promise<boolean>;
    clearCart(params: any): Promise<boolean>;
}
