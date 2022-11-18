"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    realname: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    }
}, { timestamps: true });
//# sourceMappingURL=users.model.js.map