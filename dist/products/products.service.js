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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel, favModel) {
        this.productModel = productModel;
        this.favModel = favModel;
    }
    async getProductByID(id) {
        let product = await this.productModel.findOne({ "_id": id }).populate('design');
        return product;
    }
    async getProductByDesign(designId) {
        let products = await this.productModel.find({ "design": designId }).populate('design');
        return products;
    }
    async getHomeProducts(page) {
        let limit = 8;
        let products = await this.productModel.find().sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('design');
        return products;
    }
    async getHomeProductsByPrice(min, max) {
        let products = await this.productModel.find({ "price": { $gte: min, $lte: max } }).sort({ "updatedAt": -1 }).populate('design');
        return products;
    }
    async getHomeProductsByType(typeID) {
        let type = null;
        if (typeID == 1)
            type = 'Camiseta';
        else if (typeID == 2)
            type = 'Pantalon';
        else if (typeID == 3)
            type = 'Sudadera';
        else
            return null;
        let products = await this.productModel.find({ "type": type }).sort({ "updatedAt": -1 }).populate('design');
        return products;
    }
    async getHomeProductsByPrice_Type(min, max, typeID) {
        let type = null;
        if (typeID == 1)
            type = 'Camiseta';
        else if (typeID == 2)
            type = 'Pantalon';
        else if (typeID == 3)
            type = 'Sudadera';
        else
            return null;
        let products = await this.productModel.find({ "type": type, "price": { $gte: min, $lte: max } })
            .sort({ "updatedAt": -1 })
            .populate('design');
        return products;
    }
    async getUserFavProducts(id, page) {
        let limit = 8;
        let fav_products = await this.favModel.find({ "user": id }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('product');
        return fav_products;
    }
    async getUserProducts(id, page) {
        let limit = 8;
        let products = await this.productModel.find({ "seller": id }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('design');
        return products;
    }
    async searchProducts(name, page) {
        let limit = 8;
        let products = await this.productModel.find({ "type": { $regex: name, $options: 'i' } }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('design');
        return products;
    }
    async searchProductsByPrice(name, min, max) {
        let products = await this.productModel.find({ "type": { $regex: name, $options: 'i' },
            "price": { $gte: min, $lte: max } }).sort({ "updatedAt": -1 }).populate('design');
        return products;
    }
    async newProduct(price, design, image, typeID, description, seller) {
        let type = null;
        if (typeID == 1)
            type = 'Camiseta';
        else if (typeID == 2)
            type = 'Pantalon';
        else if (typeID == 3)
            type = 'Sudadera';
        else
            return null;
        const newProduct = new this.productModel({
            price,
            design,
            image,
            type,
            description,
            seller
        });
        await newProduct.save();
        return newProduct;
    }
    async updateProduct(_id, price, design, image, typeID, description) {
        let type = null;
        if (typeID == 1)
            type = 'Camiseta';
        else if (typeID == 2)
            type = 'Pantalon';
        else if (typeID == 3)
            type = 'Sudadera';
        else
            return null;
        const filter = { "_id": _id };
        const update = { price, design, image, type, description };
        let product = await this.productModel.findOneAndUpdate(filter, update);
        product = await this.productModel.findOne({ _id });
        return product;
    }
    async deleteProduct(_id, seller) {
        let result = await this.productModel.deleteOne({ _id, seller });
        return result.deletedCount == 1;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('fav')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map