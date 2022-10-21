import * as mongoose from "mongoose"
export const ProductSchema = new mongoose.Schema(
    {
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
    }

)

export interface Product extends mongoose.Document {
    _id: string;
}