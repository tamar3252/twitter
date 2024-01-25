const mongooseLike = require("mongoose");

let LikeuserSchema = new mongooseLike.Schema({
  user_id: { type: mongooseLike.Schema.Types.ObjectId, ref: "users" },
  tweet_id: { type: mongooseLike.Schema.Types.ObjectId, ref: "tweets" },
})

exports.UserModel = mongooseLike.model("likes", LikeuserSchema);