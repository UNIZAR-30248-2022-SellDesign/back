"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    precio: {
        type: Number,
        required: true
    },
    design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Design'
    },
    image: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ['Sudadera', 'Camiseta', 'Pantalon']
    },
    description: {
        type: String,
        required: false
    }
});
//# sourceMappingURL=products.model.js.map