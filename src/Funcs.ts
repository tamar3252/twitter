const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {config} = require("./Config")

export const checkPassword=async(reqPassword:String,userPassword:String)=>{
    return await bcrypt.compare(reqPassword,userPassword)
}

exports.createToken = (user_id:Number, role:String) => {
    let token = jwt.sign({ user_id, role }, "tamar12", { expiresIn: "60mins" });
    return token;
  }
  