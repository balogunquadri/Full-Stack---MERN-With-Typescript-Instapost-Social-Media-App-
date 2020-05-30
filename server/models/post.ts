import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const Schema = mongoose.Schema;

export const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: "no photo"
  },
  postedBy: {
    type: ObjectId,
    ref: "User"
  }
});
