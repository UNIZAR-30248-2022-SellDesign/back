"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavSchema = void 0;
const mongoose = require("mongoose");
exports.FavSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
//# sourceMappingURL=fav.model.js.map