import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    price: number;
    image: string;
    description?: string;
    type?: "Sudadera" | "Camiseta" | "Pantalon";
    design?: mongoose.Types.ObjectId;
    seller?: mongoose.Types.ObjectId;
}>;
export interface Product extends mongoose.Document {
    _id: string;
    price: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    type: string;
    description: string;
}
