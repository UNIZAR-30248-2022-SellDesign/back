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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PurchasesService = class PurchasesService {
    constructor(productModel, purchaseModel) {
        this.productModel = productModel;
        this.purchaseModel = purchaseModel;
    }
    async getUserPurchaseHistory(id, page) {
        let limit = 8;
        let history = await this.purchaseModel.find({ "user": id }).skip(limit * page).limit(limit);
        return history;
    }
    async buyProduct(userId, productId) {
        const newPurchase = new this.purchaseModel({
            user: userId,
            product: productId,
        });
        await newPurchase.save();
        return newPurchase;
    }
};
PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('purchase')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PurchasesService);
exports.PurchasesService = PurchasesService;
//# sourceMappingURL=purchases.service.js.map