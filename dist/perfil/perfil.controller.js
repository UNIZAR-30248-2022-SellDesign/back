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
exports.PerfilController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("../products/products.service");
let PerfilController = class PerfilController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getUserProducts(params) {
        return await this.productsService.getUserProducts(params.id, params.page);
    }
    async getUserFavProducts(params) {
        return await this.productsService.getUserFavProducts(params.id, params.page);
    }
    async getIfUserFavProduct(params) {
        return await this.productsService.getIfUserFavProduct(params.id, params.product);
    }
    async postUserFavProduct(params) {
        return await this.productsService.postIfUserFavProduct(params.id, params.product);
    }
    async deleteUserFavProduct(params) {
        return await this.productsService.deleteIfUserFavProduct(params.id, params.product);
    }
};
__decorate([
    (0, common_1.Get)('/:id/products/:page'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getUserProducts", null);
__decorate([
    (0, common_1.Get)('/:id/fav/:page'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] fav products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User fav products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getUserFavProducts", null);
__decorate([
    (0, common_1.Get)('/fav/:id/:product'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] fav products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User fav products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getIfUserFavProduct", null);
__decorate([
    (0, common_1.Post)('/fav/:id/:product'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] fav products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User fav products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "postUserFavProduct", null);
__decorate([
    (0, common_1.Delete)('/fav/:id/:product'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] fav products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User fav products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "deleteUserFavProduct", null);
PerfilController = __decorate([
    (0, common_1.Controller)('perfil'),
    (0, swagger_1.ApiTags)("Perfil API"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], PerfilController);
exports.PerfilController = PerfilController;
//# sourceMappingURL=perfil.controller.js.map