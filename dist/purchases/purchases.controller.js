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
exports.PurchasesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchases_service_1 = require("./purchases.service");
let PurchasesController = class PurchasesController {
    constructor(purchasesService) {
        this.purchasesService = purchasesService;
    }
    async getUserPurchaseHistory(params) {
        return await this.purchasesService.getUserPurchaseHistory(params.user, params.page);
    }
    async buyProduct(params) {
        return await this.purchasesService.buyProduct(params.user, params.product);
    }
};
__decorate([
    (0, common_1.Get)('/:user/:page'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get purchase history from user with id [user]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products from history returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "getUserPurchaseHistory", null);
__decorate([
    (0, common_1.Post)('/:user/:product'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiParam)({
        name: "product"
    }),
    (0, swagger_1.ApiOperation)({ description: "Put a new product with id [product] into user with id [user]'s history" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "New product added to history" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "buyProduct", null);
PurchasesController = __decorate([
    (0, common_1.Controller)('purchases'),
    __metadata("design:paramtypes", [purchases_service_1.PurchasesService])
], PurchasesController);
exports.PurchasesController = PurchasesController;
//# sourceMappingURL=purchases.controller.js.map