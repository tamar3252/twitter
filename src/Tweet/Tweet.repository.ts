const {TweetModel}=require("..Models/t")


const getAllTweets=async()=>{
    return await TweetModel.find()
}

const addTweet=async(tweetObj: Object)=>{
    return await new TweetModel(tweetObj)
}

const deleteTweet=async(tweetId: String)=>{
    return await TweetModel.deleteOne(tweetId)
}




