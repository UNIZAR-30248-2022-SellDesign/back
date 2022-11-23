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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getUserDesigns(params) {
        return await this.productsService.getUserProducts(params.user, params.page);
    }
    async homeProducts(params) {
        return await this.productsService.getHomeProducts(params.page);
    }
    async homeProductsByPrice(params) {
        return await this.productsService.getHomeProductsByPrice(params.min, params.max);
    }
    async homeProductsByType(params) {
        return await this.productsService.getHomeProductsByType(params.type);
    }
    async homeProductsByPrice_Type(params) {
        return await this.productsService.getHomeProductsByPrice_Type(params.min, params.max, params.type);
    }
    async buscarProducts(params) {
        return await this.productsService.searchProducts(params.name, params.page);
    }
    async buscarProductsPorPrecio(params) {
        return await this.productsService.searchProductsByPrice(params.name, params.min, params.max);
    }
    async getProductByID(params) {
        return await this.productsService.getProductByID(params.id);
    }
    async allProductDesign(params) {
        return await this.productsService.getProductByDesign(params.design);
    }
    async addProduct(price, design, image, type, description, seller) {
        return await this.productsService.newProduct(price, design, image, type, description, seller);
    }
    async updateProduct(_id, price, design, image, type, description) {
        return await this.productsService.updateProduct(_id, price, design, image, type, description);
    }
    async deleteProduct(params) {
        return await this.productsService.deleteProduct(params.id, params.seller);
    }
};
__decorate([
    (0, common_1.Get)('/user/:user/:page'),
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
], ProductsController.prototype, "getUserDesigns", null);
__decorate([
    (0, common_1.Get)('/home/page/:page'),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get all products at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Home products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "homeProducts", null);
__decorate([
    (0, common_1.Get)('/home/:min/:max'),
    (0, swagger_1.ApiParam)({
        name: "min"
    }),
    (0, swagger_1.ApiParam)({
        name: "max"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get all products with price between [min]-[max]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Home products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "homeProductsByPrice", null);
__decorate([
    (0, common_1.Get)('/home/:type'),
    (0, swagger_1.ApiParam)({
        name: "type"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get all products filtered by [type]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Home products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "homeProductsByType", null);
__decorate([
    (0, common_1.Get)('/home/:min/:max/:type'),
    (0, swagger_1.ApiParam)({
        name: "min"
    }),
    (0, swagger_1.ApiParam)({
        name: "max"
    }),
    (0, swagger_1.ApiParam)({
        name: "type"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get all products with price beetwen [min]-[max]" +
            "and filtered by [type]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Home products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "homeProductsByPrice_Type", null);
__decorate([
    (0, common_1.Get)('/search/:name/:page'),
    (0, swagger_1.ApiParam)({
        name: "name"
    }),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Search products filtered by [name] at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "buscarProducts", null);
__decorate([
    (0, common_1.Get)('/search/:name/:min/:max'),
    (0, swagger_1.ApiParam)({
        name: "name"
    }),
    (0, swagger_1.ApiParam)({
        name: "min"
    }),
    (0, swagger_1.ApiParam)({
        name: "max"
    }),
    (0, swagger_1.ApiOperation)({ description: "Search products filtered by [name] " +
            "with price beetwen [min]-[max]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "buscarProductsPorPrecio", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Return data of product with id [product-id]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductByID", null);
__decorate([
    (0, common_1.Get)('/design/:design'),
    (0, swagger_1.ApiParam)({
        name: "design-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Return all products with [design-id]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "allProductDesign", null);
__decorate([
    (0, common_1.Post)('/new'),
    (0, swagger_1.ApiParam)({
        name: "price"
    }),
    (0, swagger_1.ApiParam)({
        name: "design"
    }),
    (0, swagger_1.ApiParam)({
        name: "image"
    }),
    (0, swagger_1.ApiParam)({
        name: "type"
    }),
    (0, swagger_1.ApiParam)({
        name: "description"
    }),
    (0, swagger_1.ApiParam)({
        name: "seller"
    }),
    (0, swagger_1.ApiOperation)({ description: "Create a new product with the given [Body]" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product created correctly." }),
    __param(0, (0, common_1.Body)('price')),
    __param(1, (0, common_1.Body)('design')),
    __param(2, (0, common_1.Body)('image')),
    __param(3, (0, common_1.Body)('type')),
    __param(4, (0, common_1.Body)('description')),
    __param(5, (0, common_1.Body)('seller')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiParam)({
        name: "price"
    }),
    (0, swagger_1.ApiParam)({
        name: "design"
    }),
    (0, swagger_1.ApiParam)({
        name: "image"
    }),
    (0, swagger_1.ApiParam)({
        name: "type"
    }),
    (0, swagger_1.ApiParam)({
        name: "description"
    }),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Update product [product-id] with the given [Body]" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product updated correctly." }),
    __param(0, (0, common_1.Body)('_id')),
    __param(1, (0, common_1.Body)('price')),
    __param(2, (0, common_1.Body)('design')),
    __param(3, (0, common_1.Body)('image')),
    __param(4, (0, common_1.Body)('type')),
    __param(5, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/delete/:seller/:id'),
    (0, swagger_1.ApiParam)({
        name: "seller"
    }),
    (0, swagger_1.ApiParam)({
        name: "product-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Delete product with id [product-id] and uploaded by [seller]" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product deleted correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    (0, swagger_1.ApiTags)("Products API"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map