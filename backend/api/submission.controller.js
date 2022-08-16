const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const Subm = db.submission;
const Pathogen = db.pathogen;

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
        createdRecord = await Subm.create(incomingInfo, { transaction: t })
      });
    // console.log(JSON.stringify(createdRecord, null, 1))
    return res.json({ data: createdRecord })
  } catch (err) {
    console.log(err.message)
    next({ status: 400, message: err.message })
  }

}
exports.uploadPhoto = async (req, res, next) => {

  console.log(`@@@@---receiving image from website---@@@@`);
  try {
    let { id } = req.params
    const url = process.env.PHOTO_URL
    console.log(`@@@@---photo url: ${url}---@@@@`);
    const filesArray = req.files

    // const imagePath = path.join(__dirname, '/public/tickImages');
    // const fileUpload = new Resize(imagePath)
    if (!filesArray || filesArray < 1) {
      throw new Error('Please provide an image')
    }
    let record = await Subm.findByPk(id)
    filesArray.forEach((file, i) => {
      console.log(`@@@@@---path---@@@@@`, file.path)
      if (i === 0) {
        record.photoFrontUrl = `${url}/${file.path}`;
      }
      if (i === 1) {
        record.photoBackUrl = `${url}/${file.path}`;
      }
      if (i === 2) {
        record.photoOtherUrl = `${url}/${file.path}`;
      }

    })

    await record.save();
    console.log(`@@@@---photo url example---@@@@`, record.photoFrontUrl)

    return res.json({ newUrls: [record.photoFrontUrl, record.photoBackUrl, record.photoOtherUrl] })
  } catch (err) {
    console.log(err.message)
    next(err)
  }

}
exports.getProgress = async (req, res, next) => {
  console.log(`@@@@---getting progress of ${req.params.id}---@@@@`);
  try {
    let { id } = req.params
    let foundRecord = await Subm.findByPk(id, {
      include: [
        {
          model: db.ticks,
          as: 'photo',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.ticks,
          as: 'specimen',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.users,
          as: 'specIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: db.users,
          as: 'photoIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: db.pathogen,
          attributes: ["id", "pathogen"]
        }
      ]
    })

    res.json({ record: foundRecord })


  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.getAllSubs = async (req, res, next) => {
  console.log(`@@@@---getting all submissions---@@@@`);
  try {
    // let orgsPerPage = req.query.orgsPerPage ? req.query.orgsPerPage : 100;
    // let page = req.query.page ? req.query.page : 0;
    // let page = 0;
    // console.log(req.user)

    // let page  = req.query.page ? req.query.page : 0;
    let foundSubs = await Subm.findAll({
      where: {
        duplicate: {
          [Op.is]: null
        },

      },

      // offset: page,
      include: [
        {
          model: db.ticks,
          as: 'photo',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.ticks,
          as: 'specimen',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.users,
          as: 'specIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: db.users,
          as: 'photoIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },

      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.getSubPage = async (req, res, next) => {
  console.log(`@@@@---getting a page of submissions---@@@@`);
  try {

    let numLimit = req.query.numLimit ? parseInt(req.query.numLimit) : 3;
    let page = req.query.page ? parseInt(req.query.page) : 0;
    let filter = req.query.filter ? req.query.filter : '';

    if (filter === 'totalSubs') {
      query = { duplicate: { [Op.is]: null }, }
    } else if (filter === 'pendPhotos') {
      query = { duplicate: { [Op.is]: null }, photosReviewed: {[Op.is]: null }, }
    } else if (filter === 'pendReceived') {
      query = { duplicate: { [Op.is]: null }, specimenRequested: {[Op.not]: null }, specimenReceived: {[Op.is]: null}}
    } else if (filter === 'pendIdentified') {
      query = { duplicate: { [Op.is]: null }, specimenIdentified: {[Op.is]: null }, specimenReceived: {[Op.not]: null}}
    } else if (filter === 'totalIdent') {
      query = { duplicate: { [Op.is]: null }, specimenIdentified: {[Op.not]: null }}
    } else if (filter === 'notReq') {
      query = { duplicate: { [Op.is]: null }, photosReviewed: {[Op.not]: null }, specimenIdentified: {[Op.is]: null }, specimenRequested:{[Op.is]: null}}
    } else {
      query = { duplicate: { [Op.is]: null }, }
    }



    let foundSubs;

    await db.sequelize.transaction(async (t) => {
      foundSubs = await Subm.findAll({
        limit: numLimit,
        offset: page * numLimit,
        where: query,
        include: [
          {
            model: db.ticks,
            as: 'photo',
            attributes: ['id', 'scientific', 'common']
          },
          {
            model: db.ticks,
            as: 'specimen',
            attributes: ['id', 'scientific', 'common']
          },
          {
            model: db.users,
            as: 'specIdUser',
            attributes: ['id', 'firstName', 'lastName']
          },
          {
            model: db.users,
            as: 'photoIdUser',
            attributes: ['id', 'firstName', 'lastName']
          },

        ]
      }, { transaction: t })
    })

    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.updateSubm = async (req, res, next) => {
  console.log(`@@@@---update existing submission: ${JSON.stringify(req.body, null, 1)}---@@@@`);
  try {
    let { id } = req.params
    let data = req.body
    let pathosOp = data.operation
    let freshPathogens = [data.pathogens]
    let updatedTick;
        
    await db.sequelize
      .transaction(async (t) => {
        if (freshPathogens && freshPathogens.length > 0 && pathosOp === 'add'){
          const toBeUpdated = await Subm.findByPk(id,{
            include: {model: db.pathogen}
          }, {transaction: t})
          // replace previous with updated list of pathogens
          await toBeUpdated.addPathogens(freshPathogens) // this does not work if you include it in the transactions, the pathogens write but the update times out no matter how long you run it.
        }
        if (freshPathogens && freshPathogens.length > 0 && pathosOp === 'remove'){
          const toBeUpdated = await Subm.findByPk(id,{
            include: {model: db.pathogen}
          }, {transaction: t})
          // replace previous with updated list of pathogens
          await toBeUpdated.removePathogens(freshPathogens) // this does not work if you include it in the transactions, the pathogens write but the update times out no matter how long you run it.
        }
        
        await Subm.update(data, { paranoid: false, where: { id } }, { transaction: t })
        // console.log('updated', updated)
        updatedTick = await Subm.findByPk(id, {
          include: [
            {
              model: db.ticks,
              as: 'photo',
              attributes: ['id', 'scientific', 'common']
            },
            {
              model: db.ticks,
              as: 'specimen',
              attributes: ['id', 'scientific', 'common']
            },
            {
              model: db.users,
              as: 'specIdUser',
              attributes: ['id', 'firstName', 'lastName']
            },
            {
              model: db.users,
              as: 'photoIdUser',
              attributes: ['id', 'firstName', 'lastName']
            },
            {
              model: db.pathogen,
              attributes: ['id', 'pathogen']
            }
          ]
        }, { transaction: t })
      })
    if (updatedTick === null) {
      throw new Error(`tick ${id} not found`)
    }
    return res.json({ record: updatedTick })
  } catch (err) {
    // console.log(err.message)
    next(err)
  }



}

exports.deleteSub = async (req, res, next) => {
  console.log(`deleting submission ${req.params.id}`)
  try {
    const { id } = req.params;
    console.log(id)
    let num;
    await db.sequelize
      .transaction(async (t) => {

        num = await Subm.destroy({
          where: { id: id },
        }, { transaction: t })
      });
    console.log(num)
    if (num == 1) {
      res.json({ message: `Record ${id} was deleted` })
    } else {
      res.status(400).json({
        code: "ERROR_ADMIN_DELETE",
        message: `Cannot delete record with id=${id}. Maybe record was not found!`,
      });
    }


  } catch (error) {
    console.log(error.message)
    next(error);
  }
}

exports.downloadData = async (req, res, next) => {
  console.log('downloading submission data')
  try {
    let foundSubs = await Subm.findAll({
      paranoid: false,
      raw: true,
      include: [
        {
          model: db.ticks,
          as: 'photo',
          attributes: ['id', ['scientific', 'photoScientific']]
        },
        {
          model: db.ticks,
          as: 'specimen',
          attributes: ['id', ['scientific', 'specimenScientific']]
        },
        {
          model: db.users,
          as: 'specIdUser',
          attributes: ['id', ['firstName', 'specimenIdentifierFirstName'], ['lastName', 'specimentIdentiferLastName']]
        },
        {
          model: db.users,
          as: 'photoIdUser',
          attributes: ['id', ['firstName', 'photoIdentiferFirstName'], ['lastName', 'photoIdentifierLastName']]
        },
        {
          model: db.pathogen,
        }
      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    next(err)
  }
}
exports.getDeleted = async(req, res, next) => {
  console.log(`@@@@---getting deleted submissions---@@@@`);
  try {
    // let orgsPerPage = req.query.orgsPerPage ? req.query.orgsPerPage : 100;
    // let page = req.query.page ? req.query.page : 0;
    // let page = 0;
    // console.log(req.user)

    // let page  = req.query.page ? req.query.page : 0;
    let foundSubs = await Subm.findAll({
      paranoid: false,
      where: {
        deletedAt: {
          [Op.not]: null
        }

      },

      // offset: page,
      include: [
        {
          model: db.ticks,
          as: 'photo',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.ticks,
          as: 'specimen',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.users,
          as: 'specIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: db.users,
          as: 'photoIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },

      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}
exports.getDupes = async(req, res, next) => {
  console.log(`@@@@---getting all submissions, even duplicates---@@@@`);
  try {
    // let orgsPerPage = req.query.orgsPerPage ? req.query.orgsPerPage : 100;
    // let page = req.query.page ? req.query.page : 0;
    // let page = 0;
    // console.log(req.user)

    // let page  = req.query.page ? req.query.page : 0;
    let foundSubs = await Subm.findAll({
      
     

      // offset: page,
      include: [
        {
          model: db.ticks,
          as: 'photo',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.ticks,
          as: 'specimen',
          attributes: ['id', 'scientific', 'common']
        },
        {
          model: db.users,
          as: 'specIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: db.users,
          as: 'photoIdUser',
          attributes: ['id', 'firstName', 'lastName']
        },

      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}