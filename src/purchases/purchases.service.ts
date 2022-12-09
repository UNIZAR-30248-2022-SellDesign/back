import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/products.model';
import { Purchase } from './purchases.model';

@Injectable()
export class PurchasesService {
    constructor(@InjectModel('product') private readonly productModel: Model<Product>,
        @InjectModel('purchase') private readonly purchaseModel: Model<Purchase>) { }

        async getUserPurchaseHistory(id, page) {
            let limit = 8;
            let history = await this.purchaseModel.find({ "user": id }).skip(limit * page).limit(limit);
            return history;
        }

        async buyProduct(userId, productId): Promise<any> {
            const newPurchase = new this.purchaseModel({
                user:userId,
                product:productId,
            });
            await newPurchase.save();
            return newPurchase;
        }
}
