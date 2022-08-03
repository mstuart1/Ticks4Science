
module.exports = (app) => {
    const PathogenCtl  = require("./pathogen.controller");
    const router = require("express").Router();
      
    router
    //get all pathogens
      .get("/", PathogenCtl.getAll)
     
      app.use("/pathogen", router);
  };
  