const db = require("../models");
// const Resize = require("../resize");  // trying something more simple
// const Op = db.Sequelize.Op;
const Tick = db.ticks;
const TickPathos = db.tick_pathogen;

exports.getTick = async (req, res, next) => {
  console.log(`@@@@---getting tick id ${req.params.id}---@@@@`);
  try {
    let { id } = req.params
    let foundRecord = await Tick.findByPk(id)

    res.json({ foundRecord })


  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.getAllTicks = async (req, res, next) => {
  console.log(`@@@@---getting all ticks---@@@@`);
  try {
    let allTicks = await Tick.findAll()
    res.json({ allTicks })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.createTick = async (req, res, next) => {
  console.log(`@@@@---receiving form from website---@@@@`);
  // console.log(JSON.stringify(req.body, null, 1))
  try {
    // console.log(JSON.stringify(req.body, null, 1))
    let createdRecord;
    let incomingInfo = req.body;



    // let photos = incomingInfo.feature.attachments 

    // incomingInfo = incomingInfo.feature.attributes;
    // if (Object.keys(photos).length > 0){
    //   incomingInfo.photoFrontUrl = photos.photoFront[0].url; // ?token=7UTVeIz0jyv8LVMGwzVWo-HIQVbEfVMmRVVUv5Zx3pa2G21rMsK398v93M3YSQUpraQJ64I-iimQkAOOmXcuXqfa6YDyZgaIBT1jVJhEmkNAteHCFNq5uxWulZLCMkeQ0OLJ5ICn34wSWKPITxPm4CHYzSbZENbc_ljBtHyvmfRn0X5VVhSNz7fcAp02MwkQ6PV7wda9acD4S8ObH--txOp8LxdxzjYahPWrCPRRF4Q.
    //   incomingInfo.photoBackUrl = photos.photoBack[0].url;
    // }
    // console.log(incomingInfo)
    await db.sequelize
      .transaction(async (t) => {
        createdRecord = await Tick.create(incomingInfo, { transaction: t })
      });
    // console.log(JSON.stringify(createdRecord, null, 1))
    return res.json({ data: createdRecord })
  } catch (err) {
    console.log(err.message)
    next({ status: 400, message: err.message })
  }

}

exports.updateTick = async (req, res, next) => {
  console.log(`@@@@---receiving form from website---@@@@`);
  // console.log(JSON.stringify(req.body, null, 1))
  try {
    // console.log(JSON.stringify(req.body, null, 1))
    let updatedRecord;
    let incomingInfo = req.body;
    let { id } = req.params

    await db.sequelize
      .transaction(async (t) => {
        updatedRecord = await Tick.update(incomingInfo, {
          where: {
            id,
          }
        }, { transaction: t })
      });
    // console.log(JSON.stringify(createdRecord, null, 1))
    return res.json({ data: updatedRecord })
  } catch (err) {
    console.log(err.message)
    next(err)
  }

}

exports.updatePathos = async (req, res, next) => {
  console.log(`@@@@---updating pathogens---@@@@`);
  console.log(JSON.stringify(req.body, null, 1))
  console.log(req.params)
  try {
    // console.log(JSON.stringify(req.body, null, 1))
    let updatedTick
    let incomingInfo = req.body.map(item => parseInt(item));


    let { id } = req.params

    await db.sequelize
      .transaction(async (t) => {
        let foundTick = await Tick.findOne({
          where: {
            id,
          },
          include: { model: db.pathogen }
        }, { transaction: t })

        // todo this needs to be tested once data exists
        let oldPathos = foundTick.pathogens.map(item => item.id)
        let freshPathos = incomingInfo.filter(item => !oldPathos.includes(item))

        let createArr = freshPathos.map(item => {
          return { tickId: id, pathogenId: item }
        })

        console.log('@@@@@@@@@@@@@@@@@@', createArr)
        await TickPathos.bulkCreate(
          createArr,
          { transaction: t }
        )


        updatedTick = await Tick.findOne({ where: { id }, include: { model: db.pathogen } }, { transaction: t })

      });
    // console.log('@@@@@@@@@@@@@@', JSON.stringify(updatedTick, null, 1))
    return res.json({ updatedTick })
  } catch (err) {
    console.log(err.message)
    next(err)
  }

}








