import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/products.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
    constructor(@InjectModel('product') private readonly productModel: Model<Product>,
        @InjectModel('cart') private readonly cartModel: Model<Cart>) { }

    async getUserCartProducts(id, page) {
        let limit = 8;
        let cart_products = await this.cartModel.find({ "user": id }).limit(limit);
        return cart_products;
    }

    async addProductToCart(userId, productId) {
        const newCartProduct = new this.cartModel({
            user:userId,
            product:productId,
        });
        await newCartProduct.save();
        return newCartProduct;
    }

    async removeProductFromCart(userId,productId) {
        let result = await this.cartModel.deleteOne({userId,productId})
        return result.deletedCount == 1
    }

    async clearCart(userId) {
        let result = await this.cartModel.deleteMany({userId})
        return result.deletedCount >= 1
    }
}
