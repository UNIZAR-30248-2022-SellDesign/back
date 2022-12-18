import * as mongoose from "mongoose";
export declare const CartSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    product?: mongoose.Types.ObjectId;
    user?: mongoose.Types.ObjectId;
}>;
export interface Cart extends mongoose.Document {
    _id: string;
    product: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
}
