import { PurchasesService } from 'src/purchases/purchases.service';
import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartsService;
    private readonly purchasesService;
    constructor(cartsService: CartService, purchasesService: PurchasesService);
    getUserCartProducts(params: any): Promise<(import("./cart.model").Cart & Required<{
        _id: string;
    }>)[]>;
    addProductToCart(params: any): Promise<import("./cart.model").Cart & Required<{
        _id: string;
    }>>;
    removeProductFromCart(params: any): Promise<boolean>;
    clearCart(params: any): Promise<boolean>;
    purchaseCartContent(params: any): Promise<(import("./cart.model").Cart & Required<{
        _id: string;
    }>)[]>;
}
