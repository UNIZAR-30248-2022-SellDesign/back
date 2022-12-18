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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DesignsService = class DesignsService {
    constructor(designModel, productModel, favModel) {
        this.designModel = designModel;
        this.productModel = productModel;
        this.favModel = favModel;
    }
    async getDesign(req) {
        const design = await this.designModel.findOne({ name: req });
        return design;
    }
    async getDesignByID(_id) {
        const design = await this.designModel.findOne({ _id });
        return design;
    }
    async newDesign(designer, image, name) {
        const newDesign = new this.designModel({
            name,
            designer,
            image
        });
        await newDesign.save();
        return newDesign;
    }
    async updateDesign(id, image, name) {
        const filter = { "_id": id };
        const update = { "name": name, "image": image };
        let design = await this.designModel.findOneAndUpdate(filter, update);
        design = await this.designModel.findOne({ "_id": id });
        return design;
    }
    async deleteDesign(id, designer) {
        var e_1, _a;
        let products_with_design = await this.productModel.find({ "design": id });
        try {
            for (var products_with_design_1 = __asyncValues(products_with_design), products_with_design_1_1; products_with_design_1_1 = await products_with_design_1.next(), !products_with_design_1_1.done;) {
                const product = products_with_design_1_1.value;
                await this.favModel.deleteMany({ "product": product._id });
                await this.productModel.deleteOne({ "_id": product._id, "seller": product.seller });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (products_with_design_1_1 && !products_with_design_1_1.done && (_a = products_with_design_1.return)) await _a.call(products_with_design_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        let result = await this.designModel.deleteOne({ "_id": id, "designer": designer });
        return result.deletedCount == 1;
    }
    async getUserDesigns(designer, page) {
        let limit = 8;
        let designs = await this.designModel.find({ "designer": designer }).sort({ "updatedAt": -1 }).skip(page * limit).limit(limit);
        return designs;
    }
};
DesignsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('design')),
    __param(1, (0, mongoose_1.InjectModel)('product')),
    __param(2, (0, mongoose_1.InjectModel)('fav')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DesignsService);
exports.DesignsService = DesignsService;
//# sourceMappingURL=designs.service.js.map