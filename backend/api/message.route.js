module.exports = (app) => {
    const MessageCtl = require("./message.controller");
    const router = require("express").Router();
    // const upload = require('./upload');

    router
    .post("/", MessageCtl.createMessage)
    .put("/:id", MessageCtl.updateMessage)
        // .get("/", auth.verifyToken, SubmCtl.getAllSubs)
        // .get("/paged", auth.verifyToken, SubmCtl.getSubPage)
        // .get("/downloadData", SubmCtl.downloadData)
        // .get('/deleted', auth.verifyToken, SubmCtl.getDeleted)
        // .get('/dupes', auth.verifyToken, SubmCtl.getDupes)
        // .get('/:id', SubmCtl.getProgress)
        // .post("/photos/:id", upload.array('photos', 2), SubmCtl.uploadPhoto)
        // .put('/:id/pathos', SubmCtl.updatePathos)
        // .put('/:id/result', SubmCtl.updateResult)
        // .put('/:id', SubmCtl.updateSubm)
        // .delete('/:id', SubmCtl.deleteSub)

    app.use("/message", router);
};
