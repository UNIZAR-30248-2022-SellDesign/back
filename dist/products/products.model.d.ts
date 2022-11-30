import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    image: string;
    price: number;
    design: mongoose.Types.ObjectId;
    description?: string;
    type?: "Sudadera" | "Camiseta" | "Pantalon";
    seller?: mongoose.Types.ObjectId;
}>;
export interface Product extends mongoose.Document {
    _id: string;
    price: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    type: string;
    description: string;
    seller: mongoose.Schema.Types.ObjectId;
}
