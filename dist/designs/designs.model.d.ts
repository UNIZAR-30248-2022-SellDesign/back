import * as mongoose from "mongoose";
export declare const DesignSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    [x: string]: any;
}>;
export interface Design extends mongoose.Document {
    _id: string;
}
