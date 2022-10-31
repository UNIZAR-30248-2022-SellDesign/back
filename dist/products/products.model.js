"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'design'
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Sudadera', 'Camiseta', 'Pantalon']
    },
    description: {
        type: String,
        required: false
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
//# sourceMappingURL=products.model.js.map