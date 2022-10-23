import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    precio: number;
    image: string;
    design?: mongoose.Types.ObjectId;
    tipo?: "Sudadera" | "Camiseta" | "Pantalon";
    description?: string;
}>;
export interface Product extends mongoose.Document {
    _id: string;
    precio: string;
    design: mongoose.Schema.Types.ObjectId;
    image: string;
    tipo: string;
    description: string;
}
