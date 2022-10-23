import * as mongoose from "mongoose"
export const ProductSchema = new mongoose.Schema(
    {
        precio: {
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
    precio: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    tipo: string;
    description: string;
}
