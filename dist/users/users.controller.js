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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bcrypt = require("bcrypt");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const local_auth_guard_1 = require("../auth/local.auth.guard");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async addUser(userPassword, userName, email) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
        const result = await this.usersService.insertUser(userName, hashedPassword, email);
        return {
            msg: 'User successfully registered',
            userId: result.id,
            userName: result.username,
            email: result.email,
            realname: result.realname,
            description: result.description
        };
    }
    login(req) {
        return {
            User: req.user,
            msg: 'User logged in'
        };
    }
    getHello(req) {
        return req.user;
    }
    logout(req) {
        req.session.destroy();
        return { msg: 'The user session has ended' };
    }
    async user(params) {
        const user = await this.usersService.getUser(params.userName);
        if (user == undefined) {
            throw new common_1.BadRequestException('Invalid user');
        }
        return user;
    }
    async setRealName(params) {
        const user = await this.usersService.setRealName(params.userName, params.realName);
    }
    async setDescription(params) {
        const user = await this.usersService.setDescription(params.userName, params.description);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, swagger_1.ApiParam)({
        name: "username"
    }),
    (0, swagger_1.ApiParam)({
        name: "password"
    }),
    (0, swagger_1.ApiParam)({
        name: "email"
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: "User registered correctly" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "User already exists" }),
    __param(0, (0, common_1.Body)('password')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiParam)({
        name: "username"
    }),
    (0, swagger_1.ApiParam)({
        name: "password"
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: "User loged in" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Incorrect password" }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('/protected'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UsersController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('/user/:userName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "user", null);
__decorate([
    (0, common_1.Post)('/setRealName/:userName/:realName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setRealName", null);
__decorate([
    (0, common_1.Post)('/setDescription/:userName/:description'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setDescription", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map