import { Model } from 'mongoose';
import { Product } from '../products/products.model';
import { Purchase } from './purchases.model';
export declare class PurchasesService {
    private readonly productModel;
    private readonly purchaseModel;
    constructor(productModel: Model<Product>, purchaseModel: Model<Purchase>);
    getUserPurchaseHistory(id: any, page: any): Promise<(Purchase & Required<{
        _id: string;
    }>)[]>;
    buyProduct(userId: any, productId: any): Promise<any>;
}
