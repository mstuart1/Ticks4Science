module.exports = (app) => {
    const MessageCtl = require("./message.controller");
    const router = require("express").Router();
    const auth = require("./authHelper");

    router
    .post("/", MessageCtl.createMessage)
    .put("/:id", MessageCtl.updateMessage)
    .get("/deleted", auth.verifyToken, MessageCtl.getDeleted)

    app.use("/message", router);
};
