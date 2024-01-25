import mongoose, { Document, Schema, Types } from "mongoose";

type Tweet = {
  text:String,
  user_id: Types.ObjectId[],
  comments: Types.ObjectId[];
  likes: Types.ObjectId[]
};

type UserDocument = Tweet & Document;

let TweetSchema = new mongoose.Schema({
  text: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "tweets" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "likes" }]
})

exports.UserModel = mongoose.model("tweets", TweetSchema);