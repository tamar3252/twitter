const {TweetModel}=require("..Models/t")


const getAllTweets=async()=>{
    return await TweetModel.find()
}

const addTweet=async(req)=>{
    const response=await new TweetModel(req.body)

}


