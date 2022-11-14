import * as mongoose from "mongoose"
export const DesignSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        designer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export interface Design extends mongoose.Document {
    _id: string;
    name: string;
    designer: mongoose.Schema.Types.ObjectId;
    image: string;
}