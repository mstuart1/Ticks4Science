
module.exports = (app) => {
  const PathogenCtl = require("./pathogen.controller");
  const router = require("express").Router();

  router
    //get all pathogens
    .get("/", PathogenCtl.getAll)
    .put("/:id", PathogenCtl.update)
    .post("/", PathogenCtl.create)

  app.use("/pathogen", router);
};
