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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchases_service_1 = require("../purchases/purchases.service");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    constructor(cartsService, purchasesService) {
        this.cartsService = cartsService;
        this.purchasesService = purchasesService;
    }
    async getUserCartProducts(params) {
        return await this.cartsService.getUserCartProducts(params.user, params.page);
    }
    async addProductToCart(params) {
        return await this.cartsService.addProductToCart(params.user, params.product);
    }
    async removeProductFromCart(params) {
        return await this.cartsService.removeProductFromCart(params.user, params.product);
    }
    async clearCart(params) {
        return await this.cartsService.clearCart(params.user);
    }
    async purchaseCartContent(params) {
        let productList = await this.cartsService.getUserCartProducts(params.user, params.page);
        for (var product of productList) {
            await this.purchasesService.buyProduct(params.user, product._id);
        }
        await this.cartsService.clearCart(params.user);
        return productList;
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
    (0, swagger_1.ApiOperation)({ description: "Get cart from user with id [user]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products from cart returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getUserCartProducts", null);
__decorate([
    (0, common_1.Post)('/:user/:product'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiParam)({
        name: "product"
    }),
    (0, swagger_1.ApiOperation)({ description: "Put a new product with id [product] into user with id [user]'s cart" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "New product added to cart" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addProductToCart", null);
__decorate([
    (0, common_1.Delete)('/:user/:product'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiParam)({
        name: "product"
    }),
    (0, swagger_1.ApiOperation)({ description: "Delete product with id [product] from user with id [user]'s cart" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product removed from cart" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeProductFromCart", null);
__decorate([
    (0, common_1.Delete)('/:user'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiOperation)({ description: "Clear all products from user with id [user]'s cart" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products removed from cart" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearCart", null);
__decorate([
    (0, common_1.Delete)('/purchase/purchaseCart/:user'),
    (0, swagger_1.ApiParam)({
        name: "user"
    }),
    (0, swagger_1.ApiParam)({
        name: "product"
    }),
    (0, swagger_1.ApiOperation)({ description: "Remove all products from user with id [user]'s cart and add them to their history" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products removed from cart and added to history" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "purchaseCartContent", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, swagger_1.ApiTags)("Cart API"),
    __metadata("design:paramtypes", [cart_service_1.CartService, purchases_service_1.PurchasesService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map