import * as mongoose from "mongoose"

export const PurchaseSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
)

export interface Purchase extends mongoose.Document {
    _id: string;
    product: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
}