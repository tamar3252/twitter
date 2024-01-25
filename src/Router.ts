const usersRoute = require("./Users/Users.router");

exports.routesInit = (app:any) => {
  app.use("/user",usersRoute);
}