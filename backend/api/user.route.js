const auth = require("./authHelper");

module.exports = (app) => {
    const UserCtl  = require("./user.controller");
    const router = require("express").Router();
  
    router
      .post("/", UserCtl.inviteUser)
      .get("/", auth.verifyToken, UserCtl.getAllUsers)
      .get('/:id', UserCtl.getUser)
      .get('/byToken/:token', UserCtl.getByToken)
      .put('/', UserCtl.updateUser)
      .post('/login', UserCtl.login)
      .put('/forgot', UserCtl.reset)
      .put('/reset', UserCtl.reset)
      

      app.use("/user", router);
  };
  