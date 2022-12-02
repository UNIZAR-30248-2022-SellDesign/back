"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose = require("mongoose");
exports.CartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
//# sourceMappingURL=cart.model.js.map