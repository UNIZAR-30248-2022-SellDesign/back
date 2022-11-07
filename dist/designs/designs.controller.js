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
};
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "getDesign", null);
__decorate([
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('image')),
    __param(2, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], DesignsController.prototype, "newDesign", null);
DesignsController = __decorate([
    (0, common_1.Controller)('designs'),
    __metadata("design:paramtypes", [designs_service_1.DesignsService])
], DesignsController);
exports.DesignsController = DesignsController;
//# sourceMappingURL=designs.controller.js.map