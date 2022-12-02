"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CartService = class CartService {
    constructor(productModel, cartModel) {
        this.productModel = productModel;
        this.cartModel = cartModel;
    }
    async getUserCartProducts(id, page) {
        let limit = 8;
        let cart_products = await this.cartModel.find({ "user": id }).limit(limit);
        return cart_products;
    }
    async addProductToCart(userId, productId) {
        const newCartProduct = new this.cartModel({
            user: userId,
            product: productId,
        });
        await newCartProduct.save();
        return newCartProduct;
    }
    async removeProductFromCart(userId, productId) {
        let result = await this.cartModel.deleteOne({ userId, productId });
        return result.deletedCount == 1;
    }
    async clearCart(userId) {
        let result = await this.cartModel.deleteMany({ userId });
        return result.deletedCount >= 1;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('cart')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map