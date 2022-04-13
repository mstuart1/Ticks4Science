module.exports = (app) => {
    const SubmCtl  = require("./submission.controller");
    const router = require("express").Router();
    const upload = require('./upload');
  
    router
      .post("/", SubmCtl.createSubm)
      .put("/:id", upload.array('photos'),  SubmCtl.uploadPhoto)

      app.use("/api/submission", router);
  };
  