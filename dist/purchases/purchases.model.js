"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseSchema = void 0;
const mongoose = require("mongoose");
exports.PurchaseSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
//# sourceMappingURL=purchases.model.js.map