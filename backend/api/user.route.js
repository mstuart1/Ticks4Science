module.exports = (app) => {
    const UserCtl  = require("./user.controller");
    const router = require("express").Router();
  
    router
      .post("/", UserCtl.inviteUser)
    //   .get('/', TickCtl.getAllTicks)
      .get('/:id', UserCtl.getUser)
      .get('/byToken/:token', UserCtl.getByToken)
      .put('/', UserCtl.updateUser)
      .post('/login', UserCtl.login)

      app.use("/api/user", router);
  };
  