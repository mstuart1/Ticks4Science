module.exports = (app) => {
    const UserCtl  = require("./user.controller");
    const router = require("express").Router();
  
    router
      .post("/", UserCtl.inviteUser)
      .get('/:id', UserCtl.getUser)
      .get('/byToken/:token', UserCtl.getByToken)
      .put('/', UserCtl.updateUser)
      .post('/login', UserCtl.login)
      .put('/forgot', UserCtl.forgot)

      app.use("/user", router);
  };
  