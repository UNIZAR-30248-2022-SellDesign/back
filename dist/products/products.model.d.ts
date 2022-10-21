import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    [x: string]: any;
}>;
export interface Product extends mongoose.Document {
    _id: string;
}
