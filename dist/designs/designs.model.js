"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignSchema = void 0;
const mongoose = require("mongoose");
exports.DesignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    designer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=designs.model.js.map