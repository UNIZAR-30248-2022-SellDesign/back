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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async insertUser(userName, password, email) {
        const username = userName.toLowerCase();
        const realname = "";
        const description = "";
        const newUser = new this.userModel({
            username,
            password,
            email,
            realname,
            description
        });
        await newUser.save();
        return newUser;
    }
    async getUserById(id) {
        let user = await (await this.userModel.findById({ "_id": id }));
        return user;
    }
    async getUser(userName) {
        const username = userName === null || userName === void 0 ? void 0 : userName.toLowerCase();
        const user = await this.userModel.findOne({ username });
        return user;
    }
    async getUsers(userName) {
        const username = userName === null || userName === void 0 ? void 0 : userName.toLowerCase();
        const users = await this.userModel.find({ userName: userName });
        return users;
    }
    async setRealName(userName, realName) {
        const username = { username: userName.toLowerCase() };
        const update = { realname: realName };
        let user = await this.userModel.findOneAndUpdate(username, update);
        user = await this.userModel.findOne(username);
        return user;
    }
    async setDescription(userName, description) {
        const username = { username: userName.toLowerCase() };
        const update = { description: description };
        let user = await this.userModel.findOneAndUpdate(username, update);
        user = await this.userModel.findOne(username);
        return user;
    }
    async setImage(userName, image) {
        const username = { username: userName === null || userName === void 0 ? void 0 : userName.toLowerCase() };
        const update = { image: image };
        console.log(username);
        console.log(userName);
        let user = await this.userModel.findOneAndUpdate(username, update);
        user = await this.userModel.findOne(username);
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map