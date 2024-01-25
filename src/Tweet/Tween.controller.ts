
const { Request: ExpressRequest,respose:ExpressResponse } = require("express") ;


export const TweetCtrl ={
    getAllTweets:async (req:typeof ExpressRequest, res:typeof ExpressResponse) => {
        const respose =await getAllTweetsFunc();
        res.status(respose.status).json(respose.value)
    },
}