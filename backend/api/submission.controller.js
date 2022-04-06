const db = require("../models");
// const Op = db.Sequelize.Op;
const Subm = db.submission;

// TODO problem with getting photos - wants a token in order to view photo, so have to be logged in to rutgers.maps - either API needs to be able to download the photo somewhere or Dina's group needs to be able to access the Survey123 website so they can see the data (ideal)

exports.createSubm = async (req, res, next) => {
    console.log(`@@@@---receiving form from arcgis---@@@@`);
    console.log(JSON.stringify(req.body, null, 1))
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
        console.log(incomingInfo)
        await db.sequelize
      .transaction(async (t) => {
        createdRecord = await Subm.create(incomingInfo, {transaction: t})
      });
      console.log(JSON.stringify(createdRecord, null, 1))
        return res.json({data: createdRecord})
    } catch (err) {
      console.log(err.message)
        next({status: 400, message: err.message})
    }
  
}