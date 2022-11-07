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
exports.DesignsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DesignsService = class DesignsService {
    constructor(designModel) {
        this.designModel = designModel;
    }
    async getDesign(req) {
        const design = await this.designModel.findOne({ name: req });
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
};
DesignsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('design')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DesignsService);
exports.DesignsService = DesignsService;
//# sourceMappingURL=designs.service.js.map