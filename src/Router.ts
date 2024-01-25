const usersRoute = require("./Users/Users.router");

export const routesInit = (app:any) => {
  app.use("/user",usersRoute);
}