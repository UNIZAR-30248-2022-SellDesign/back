"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillDbModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const designs_model_1 = require("../designs/designs.model");
const fav_model_1 = require("../products/fav.model");
const products_model_1 = require("../products/products.model");
const users_model_1 = require("../users/users.model");
const fill_db_controller_1 = require("./fill-db.controller");
const fill_db_service_1 = require("./fill-db.service");
let FillDbModule = class FillDbModule {
};
FillDbModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "product", schema: products_model_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "design", schema: designs_model_1.DesignSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "user", schema: users_model_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "fav", schema: fav_model_1.FavSchema }])],
        controllers: [fill_db_controller_1.FillDbController],
        providers: [fill_db_service_1.FillDbService]
    })
], FillDbModule);
exports.FillDbModule = FillDbModule;
//# sourceMappingURL=fill-db.module.js.map