import { PurchasesService } from './purchases.service';
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    getUserPurchaseHistory(params: any): Promise<(import("./purchases.model").Purchase & Required<{
        _id: string;
    }>)[]>;
    buyProduct(params: any): Promise<any>;
}
