module.exports = (app) => {
    const TickCtl  = require("./tick.controller");
    const router = require("express").Router();
  
    router
      .post("/", TickCtl.createTick)
      .get('/:id', TickCtl.getTick)
      .put('/:id', TickCtl.updateTick)

      app.use("/api/tick", router);
  };
  