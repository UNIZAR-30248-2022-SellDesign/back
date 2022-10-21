"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignSchema = void 0;
const mongoose = require("mongoose");
exports.DesignSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    designer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    }
});
//# sourceMappingURL=designs.model.js.map