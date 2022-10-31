import * as mongoose from "mongoose"
export const ProductSchema = new mongoose.Schema(
    {
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
    }

)

export interface Product extends mongoose.Document {
    _id: string;
    price: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    type: string;
    description: string;
}
