import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    precio: number;
    image: string;
    description?: string;
    design?: mongoose.Types.ObjectId;
    tipo?: "Sudadera" | "Camiseta" | "Pantalon";
}>;
export interface Product extends mongoose.Document {
    _id: string;
}
