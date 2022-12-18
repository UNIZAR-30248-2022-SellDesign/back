"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fav_model_1 = require("../products/fav.model");
const products_model_1 = require("../products/products.model");
const designs_controller_1 = require("./designs.controller");
const designs_model_1 = require("./designs.model");
const designs_service_1 = require("./designs.service");
let DesignsModule = class DesignsModule {
};
DesignsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "design", schema: designs_model_1.DesignSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "product", schema: products_model_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "fav", schema: fav_model_1.FavSchema }])],
        controllers: [designs_controller_1.DesignsController],
        providers: [designs_service_1.DesignsService]
    })
], DesignsModule);
exports.DesignsModule = DesignsModule;
//# sourceMappingURL=designs.module.js.map