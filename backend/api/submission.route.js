module.exports = (app) => {
    const SubmCtl  = require("./submission.controller");
    const router = require("express").Router();
    const upload = require('./upload');
  
    router
      .get("/", SubmCtl.getAllSubs)
      .post("/", SubmCtl.createSubm)
      .put("/photos/:id", upload.array('photos'),  SubmCtl.uploadPhoto)
      .get('/:id', SubmCtl.getProgress)
      .put('/:id', SubmCtl.updateSubm)

      app.use("/api/submission", router);
  };
  