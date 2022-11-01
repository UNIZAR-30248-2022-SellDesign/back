import * as mongoose from "mongoose"
export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    realname: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
)

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
  email: string;
  realname: string;
  description: string;
}