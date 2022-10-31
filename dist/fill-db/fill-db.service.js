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
exports.FillDbService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FillDbService = class FillDbService {
    constructor(productModel, designModel, userModel) {
        this.productModel = productModel;
        this.designModel = designModel;
        this.userModel = userModel;
    }
    async resetDb() {
        await this.userModel.deleteMany({ "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG" });
        await this.userModel.insertMany(users_list);
    }
};
FillDbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('design')),
    __param(2, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], FillDbService);
exports.FillDbService = FillDbService;
const users_list = [
    {
        "_id": '507f1f77bcf86cd799439011',
        "username": "ibon",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "776561@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439012',
        "username": "raul",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "795333@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439013',
        "username": "gelpa",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "759406@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439014',
        "username": "ru",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "736650@unizar.es"
    }
];
const designs_list = [
    {
        "name": "",
        "designer": "",
        "image": ""
    }
];
//# sourceMappingURL=fill-db.service.js.map