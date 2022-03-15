module.exports = (app) => {
    const SubmCtl  = require("./submission.controller");
    const router = require("express").Router();
  
    router
      .post("/", SubmCtl.createSubm)

      app.use("/api/submission", router);
  };
  