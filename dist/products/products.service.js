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
const designs_service_1 = require("../designs/designs.service");
var Type;
(function (Type) {
    Type[Type[".*"] = 0] = ".*";
    Type[Type["Camiseta"] = 1] = "Camiseta";
    Type[Type["Pantalon"] = 2] = "Pantalon";
    Type[Type["Sudadera"] = 3] = "Sudadera";
})(Type || (Type = {}));
let ProductsService = class ProductsService {
    constructor(productModel, favModel, designsService) {
        this.productModel = productModel;
        this.favModel = favModel;
        this.designsService = designsService;
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
        if (typeID in Type) {
            var type = Type[typeID];
            console.log(type);
            let products = await this.productModel.find({ "type": { $regex: type, $options: 'i' } }).sort({ "updatedAt": -1 }).populate('design');
            return products;
        }
        else {
            return "No existen productos de este tipo";
        }
    }
    async getHomeProductsByPrice_Type(min, max, typeID) {
        if (typeID in Type) {
            var type = Type[typeID];
            console.log(type);
            let products = await this.productModel.find({ "type": { $regex: type, $options: 'i' }, "price": { $gte: min, $lte: max } })
                .sort({ "updatedAt": -1 })
                .populate('design');
            return products;
        }
        else {
            return "No existen productos de este tipo";
        }
    }
    async getUserFavProducts(id, page) {
        let limit = 8;
        let fav_products = await this.favModel.find({ "user": id }).limit(limit);
        return fav_products;
    }
    async getIfUserFavProduct(id, product) {
        let fav_product = await this.favModel.find({ "user": id, "product": product }).limit(1);
        return fav_product;
    }
    async postIfUserFavProduct(id, product) {
        const newFav = new this.favModel({
            user: id,
            product: product,
        });
        let isFavorite = await this.getIfUserFavProduct(id, product);
        if (isFavorite.length == 0) {
            await newFav.save();
            return newFav;
        }
        return isFavorite;
    }
    async deleteIfUserFavProduct(id, product) {
        let result = await this.favModel.deleteOne({ id, product });
        return result.deletedCount == 1;
    }
    async getUserProducts(id, page) {
        let limit = 8;
        let products = await this.productModel.find({ "seller": id }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('design');
        return products;
    }
    async searchProducts(search_name, page) {
        let limit = 8;
        let products = await this.productModel.find({ "search_name": { $regex: search_name, $options: 'i' } }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit).populate('design');
        return products;
    }
    async searchProductsByPrice(search_name, min, max) {
        let products = await this.productModel.find({ "search_name": { $regex: search_name, $options: 'i' },
            "price": { $gte: min, $lte: max } }).sort({ "updatedAt": -1 }).populate('design');
        return products;
    }
    async newProduct(price, design, image, typeID, description, seller) {
        if (typeID >= 1 && typeID <= 3) {
            var type = Type[typeID];
            var search_name = "";
            let search_design = await this.designsService.getDesignByID(design);
            if (search_design) {
                search_name = type + " " + search_design.name;
            }
            else {
                return "El diseño no existe en la base de datos";
            }
            const newProduct = new this.productModel({
                search_name,
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
        else {
            return "No se puede crear un producto con el tipo proporcionado";
        }
    }
    async updateProduct(_id, price, design, image, typeID, description) {
        if (typeID >= 1 && typeID <= 3) {
            var type = Type[typeID];
            var search_name = "";
            let search_design = await this.designsService.getDesignByID(design);
            if (search_design) {
                search_name = type + " " + search_design.name;
            }
            else {
                return "El diseño no existe en la base de datos";
            }
            const filter = { "_id": _id };
            const update = { search_name, price, design, image, type, description };
            let product = await this.productModel.findOneAndUpdate(filter, update);
            product = await this.productModel.findOne({ _id });
            return product;
        }
        else {
            return "No se puede cambiar el producto con el tipo proporcionado";
        }
    }
    async deleteProduct(_id, seller) {
        let result = await this.productModel.deleteOne({ _id, seller });
        if (result.deletedCount == 1) {
            await this.favModel.deleteMany({ "product": _id });
            return true;
        }
        else {
            return false;
        }
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('fav')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        designs_service_1.DesignsService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map