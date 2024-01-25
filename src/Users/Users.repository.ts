const { UserModel } = require("../Models/UserModel");
const { Request: ExpressRequest } = require("express");
const bcrypt = require("bcrypt");

export const findUserByEmail = async (req: typeof ExpressRequest) => {
    return await UserModel.findOne({ email: req.body.email })
}

export const findUserById = async (_id: String) => {
    return await UserModel.findOne({ _id })
}

export const addUser = async (req: typeof ExpressRequest) => {
    let user = await new UserModel(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    user.password = "********";
    return user
}

export const addFollower = async (userId: String, userToFollowId: String) => {
    return await UserModel.updateOne({ _id: userId }, { $addToSet: { follows: userToFollowId } })
}

export const removeFollower = async (userId: String, userToFollowId: String) => {
    return await UserModel.updateOne({ _id: userId, follows: { $in: [userToFollowId] }  }, { $pull: { follows: userToFollowId } })
}

export const changeToManager = async (userId: String) => {
    return await UserModel.findOneAndUpdate({ _id: userId }, { role: "admin" }, { new: true })
}
