const expressTweet = require("express")

const routerTweet = expressTweet.Tweet();

routerTweet.get("all_tweets",)
routerTweet.post("add_tweet")
routerTweet.patch("delete_tweet")



module.exports = routerTweet;