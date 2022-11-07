import * as mongoose from "mongoose";
export declare const FavSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    user?: mongoose.Types.ObjectId;
    product?: mongoose.Types.ObjectId;
}>;
export interface Fav extends mongoose.Document {
    _id: string;
    product: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
}
