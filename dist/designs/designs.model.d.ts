import * as mongoose from "mongoose";
export declare const DesignSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    designer: mongoose.Types.ObjectId;
    image: string;
}>;
export interface Design extends mongoose.Document {
    _id: string;
    name: string;
    designer: mongoose.Schema.Types.ObjectId;
    image: string;
}
