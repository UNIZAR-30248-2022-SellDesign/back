import * as mongoose from "mongoose"
export const ProductSchema = new mongoose.Schema(
    {
        search_name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        design: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'design',
            required: true
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
    },
    { timestamps: true }
)

export interface Product extends mongoose.Document {
    _id: string;
    search_name: string;
    price: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    type: string;
    description: string;
    seller: mongoose.Schema.Types.ObjectId;
}
