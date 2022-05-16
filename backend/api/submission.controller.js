const db = require("../models");
// const Resize = require("../resize");  // trying something more simple
// const Op = db.Sequelize.Op;
const Subm = db.submission;

// TODO problem with getting photos - wants a token in order to view photo, so have to be logged in to rutgers.maps - either API needs to be able to download the photo somewhere or Dina's group needs to be able to access the Survey123 website so they can see the data (ideal)

exports.createSubm = async (req, res, next) => {
    console.log(`@@@@---receiving form from arcgis or website---@@@@`);
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
        createdRecord = await Subm.create(incomingInfo, {transaction: t})
      });
      // console.log(JSON.stringify(createdRecord, null, 1))
        return res.json({data: createdRecord})
    } catch (err) {
      console.log(err.message)
        next({status: 400, message: err.message})
    }
  
}
exports.uploadPhoto = async (req, res, next) => {
  
    console.log(`@@@@---receiving image from website---@@@@`);
    try {
      let {id} = req.params
      const url = `${req.protocol}://${req.get('host')}`
      const filesArray = req.files
      
        // const imagePath = path.join(__dirname, '/public/tickImages');
        // const fileUpload = new Resize(imagePath)
        if (!filesArray || filesArray < 1) {
          throw new Error('Please provide an image')
        }
        let record = await Subm.findByPk(id)
        filesArray.forEach((file, i) => {
          if (i === 0){
            record.photoFrontUrl = `${url}/${file.path}`;
          }
          if (i === 1){
            record.photoBackUrl = `${url}/${file.path}`;
          }
          if (i === 2){
            record.photoOtherUrl = `${url}/${file.path}`;
          }

        })
        
        await record.save();
        
        return res.json({newUrls: [record.photoFrontUrl, record.photoBackUrl, record.photoOtherUrl]})
    } catch (err) {
      console.log(err.message)
        next(err)
    }
  
}
exports.getProgress = async (req, res, next) => {
  console.log(`@@@@---getting progress of ${req.params.id}---@@@@`);
  try {
    let {id} = req.params
    let foundRecord = await Subm.findByPk(id, {
      include: [
        {
          model: db.ticks,
          attributes: ['id', 'scientific', 'common']
        },
      
      ]
    })
    
    res.json({record: foundRecord})
      
      
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.getAllSubs = async (req, res, next) => {
  console.log(`@@@@---getting all submissions---@@@@`);
  try {
    let foundSubs = await Subm.findAll({
      include: [
        {
          model: db.ticks,
          attributes: ['id', 'scientific', 'common']
        },
      
      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({record: foundSubs})
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.updateSubm = async (req, res, next) => {
  console.log(`@@@@---update submission: ${JSON.stringify(req.body, null, 1)}---@@@@`);
      try {
        let {id} = req.params
        let data = req.body
        console.log(id)
        await Subm.update(data, {where: {id}})
        let updatedTick = await Subm.findByPk(id, {
          include: [
            {
              model: db.ticks,
              attributes: ['id', 'scientific', 'common']
            },
          
          ]
        })
          if (updatedTick === null) {
            throw new Error(`tick ${id} not found`)
          }
          return res.json({record: updatedTick})
      } catch (err) {
        console.log(err.message)
          next(err)
      }
    


}
