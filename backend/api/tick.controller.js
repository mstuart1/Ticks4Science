const db = require("../models");
// const Resize = require("../resize");  // trying something more simple
// const Op = db.Sequelize.Op;
const Tick = db.tick;

exports.getTick = async (req, res, next) => {
    console.log(`@@@@---getting tick id ${req.params.id}---@@@@`);
    try {
      let {id} = req.params
      let foundRecord = await Tick.findByPk(id)
      
      res.json({record: foundRecord})
        
        
    } catch (err) {
      console.log(err.message)
      next(err)
    }
  }

// exports.createSubm = async (req, res, next) => {
//     console.log(`@@@@---receiving form from arcgis or website---@@@@`);
//     // console.log(JSON.stringify(req.body, null, 1))
//     try {
//         // console.log(JSON.stringify(req.body, null, 1))
//         let createdRecord;
//         let incomingInfo = req.body;
        
        
    
//         // let photos = incomingInfo.feature.attachments 
        
//         // incomingInfo = incomingInfo.feature.attributes;
//         // if (Object.keys(photos).length > 0){
//         //   incomingInfo.photoFrontUrl = photos.photoFront[0].url; // ?token=7UTVeIz0jyv8LVMGwzVWo-HIQVbEfVMmRVVUv5Zx3pa2G21rMsK398v93M3YSQUpraQJ64I-iimQkAOOmXcuXqfa6YDyZgaIBT1jVJhEmkNAteHCFNq5uxWulZLCMkeQ0OLJ5ICn34wSWKPITxPm4CHYzSbZENbc_ljBtHyvmfRn0X5VVhSNz7fcAp02MwkQ6PV7wda9acD4S8ObH--txOp8LxdxzjYahPWrCPRRF4Q.
//         //   incomingInfo.photoBackUrl = photos.photoBack[0].url;
//         // }
//         // console.log(incomingInfo)
//         await db.sequelize
//       .transaction(async (t) => {
//         createdRecord = await Subm.create(incomingInfo, {transaction: t})
//       });
//       // console.log(JSON.stringify(createdRecord, null, 1))
//         return res.json({data: createdRecord})
//     } catch (err) {
//       console.log(err.message)
//         next({status: 400, message: err.message})
//     }
  
// }



