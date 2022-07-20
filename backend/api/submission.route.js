const auth = require("./authHelper");

module.exports = (app) => {
    const SubmCtl  = require("./submission.controller");
    const router = require("express").Router();
    const upload = require('./upload');
  
    router
      .get("/", auth.verifyToken, SubmCtl.getAllSubs)
      .get("/paged", auth.verifyToken, SubmCtl.getSubPage)
      .post("/", SubmCtl.createSubm)
      .post("/photos/:id", upload.array('photos', 2),  SubmCtl.uploadPhoto)
      .get('/:id', SubmCtl.getProgress)
      .put('/:id', SubmCtl.updateSubm)
      .delete('/:id', SubmCtl.deleteSub)

      app.use("/submission", router);
  };
  