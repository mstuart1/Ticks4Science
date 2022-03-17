const db = require("../models");
// const Op = db.Sequelize.Op;
const Subm = db.submission;

exports.createSubm = async (req, res, next) => {
    console.log(`@@@@---receiving form from arcgis---@@@@`);
    try {
        // console.log(JSON.stringify(req.body, null, 1))
        let front, back, createdRecord;
        let incomingInfo = req.body;

        // create an array of photo urls for all the attachments
        let photos = incomingInfo.feature.attachments.submitPhoto.map(photo => photo.url)
        
        if (photos.length > 0){
          incomingInfo.photoFrontUrl = photos[0];
          incomingInfo.photoBackUrl = photos[1];
        }
        
        await db.sequelize
      .transaction(async (t) => {
        createdRecord = await Subm.create(incomingInfo, {transaction: t})
      });
      console.log(JSON.stringify(createdRecord, null, 1))
        return res.json({data: createdRecord})
    } catch (err) {
        next({status: 400, message: err.message})
    }
  
}