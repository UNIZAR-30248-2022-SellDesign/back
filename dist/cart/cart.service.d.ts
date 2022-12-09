import { Model } from 'mongoose';
import { Product } from '../products/products.model';
import { Cart } from './cart.model';
export declare class CartService {
    private readonly productModel;
    private readonly cartModel;
    constructor(productModel: Model<Product>, cartModel: Model<Cart>);
    getUserCartProducts(id: any, page: any): Promise<(Cart & Required<{
        _id: string;
    }>)[]>;
    addProductToCart(userId: any, productId: any): Promise<any>;
    removeProductFromCart(userId: any, productId: any): Promise<boolean>;
    clearCart(userId: any): Promise<boolean>;
}
