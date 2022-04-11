module.exports = (app) => {
    const SubmCtl  = require("./submission.controller");
    const router = require("express").Router();
    const upload = require('./uploadMiddleware');
  
    router
      .post("/", SubmCtl.createSubm)
      .post('/images', upload.single('image'), SubmCtl.uploadPhoto)

      app.use("/api/submission", router);
  };
  