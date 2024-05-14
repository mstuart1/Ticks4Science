const auth = require("./authHelper");

module.exports = (app) => {
  const SubmCtl = require("./submission.controller");
  const router = require("express").Router();
  const upload = require('./upload');

  router
    .get("/", auth.verifyToken, SubmCtl.getAllSubs)
    .get("/paged", auth.verifyToken, SubmCtl.getSubPage)
    .get("/questions", auth.verifyToken, SubmCtl.getQuestions)
    .get("/downloadData", SubmCtl.downloadData)
    .get('/deleted', auth.verifyToken, SubmCtl.getDeleted)
    .get('/dupes', auth.verifyToken, SubmCtl.getDupes)
    .get('/:id', SubmCtl.getProgress)
    .post("/", SubmCtl.createSubm)
    .post("/photos/:id", upload.array('photos', 2), SubmCtl.uploadPhoto)
    .post('/bulkSubs', SubmCtl.createBulkSubs)
    .put('/:id/pathos', SubmCtl.updatePathos)
    .put('/:id/result', SubmCtl.updateResult)
    .put('/:id', SubmCtl.updateSubm)
    .delete('/:id', SubmCtl.deleteSub)

  app.use("/submission", router);
};
