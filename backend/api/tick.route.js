module.exports = (app) => {
    const TickCtl  = require("./tick.controller");
    const router = require("express").Router();
  
    router
      .post("/", TickCtl.createTick)
      .get('/', TickCtl.getAllTicks)
      .get('/:id', TickCtl.getTick)
      .put('/:id', TickCtl.updateTick)

      app.use("/tick", router);
  };
  