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
exports.DesignsController = void 0;
const common_1 = require("@nestjs/common");
const designs_service_1 = require("./designs.service");
const swagger_1 = require("@nestjs/swagger");
let DesignsController = class DesignsController {
    constructor(designsService) {
        this.designsService = designsService;
    }
    async getDesign(params) {
        return await this.designsService.getDesign(params.name);
    }
    async newDesign(name, image, id) {
        return await this.designsService.newDesign(id, image, name);
    }
    async updateDesign(name, image, id) {
        return await this.designsService.updateDesign(id, image, name);
    }
    async deleteDesign(params) {
        return await this.designsService.deleteDesign(params.id, params.designer);
    }
    async getUserDesigns(params) {
        return await this.designsService.getUserDesigns(params.user, params.page);
    }
};
__decorate([
    (0, common_1.Get)(':name'),
    (0, swagger_1.ApiParam)({
        name: "name"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get design with [name]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Design returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "getDesign", null);
__decorate([
    (0, common_1.Post)('/new'),
    (0, swagger_1.ApiParam)({
        name: "name"
    }),
    (0, swagger_1.ApiParam)({
        name: "image"
    }),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Create new design with given [Body]" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Design registered correctly." }),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('image')),
    __param(2, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "newDesign", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiParam)({
        name: "name"
    }),
    (0, swagger_1.ApiParam)({
        name: "image"
    }),
    (0, swagger_1.ApiParam)({
        name: "design-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Update design [design-id] with given [Body]" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Design updated correctly." }),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('image')),
    __param(2, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "updateDesign", null);
__decorate([
    (0, common_1.Delete)('/delete/:designer/:id'),
    (0, swagger_1.ApiParam)({
        name: "designer-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "design-id"
    }),
    (0, swagger_1.ApiOperation)({ description: "Delete design [design-id] uploaded by [designer-id]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Design deleted correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "deleteDesign", null);
__decorate([
    (0, common_1.Get)('/:user/:page'),
    (0, swagger_1.ApiParam)({
        name: "user-id"
    }),
    (0, swagger_1.ApiParam)({
        name: "page"
    }),
    (0, swagger_1.ApiOperation)({ description: "Get [user-id] designs at specific [page]" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User designs returned correctly." }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "getUserDesigns", null);
DesignsController = __decorate([
    (0, common_1.Controller)('designs'),
    (0, swagger_1.ApiTags)("Designs API"),
    __metadata("design:paramtypes", [designs_service_1.DesignsService])
], DesignsController);
exports.DesignsController = DesignsController;
//# sourceMappingURL=designs.controller.js.map