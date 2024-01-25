const usersRoute = require("./Users/Users.router");
const tweetRoute = require("./Tweet/Tween.router");

export const routesInit = (app:any) => {
  app.use("/user",usersRoute)
  app.use("/tweet",tweetRoute)
}