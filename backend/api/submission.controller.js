const db = require("../models");
const { mailUser } = require("./mailHelper");
const Op = db.Sequelize.Op;
const Subm = db.submission;
const Sub_Pathos = db.submission_pathogen;
const Citizen = db.citizen;
// const sql = db.Sequelize.literal;

//create submission
exports.createSubm = async (req, res, next) => {
  console.log(`@@@@---receiving form from arcgis or website---@@@@`);
  // console.log(JSON.stringify(req.body, null, 1))
  try {
    let createdRecord;
    let incomingInfo = req.body;

    if(incomingInfo.email){
      let foundCitizen = await Citizen.findOne({ where: { email: incomingInfo.email } })
      // console.log('foundCitizen', foundCitizen.id)
      if (!foundCitizen) {
        // ** create a new citizen record and add the id to the submission
      incomingInfo.citizen = {
        email: incomingInfo.email,
      }
      
     } else {
      // ** add the citizen id to the submission
        incomingInfo.citizenId = foundCitizen.id
      }
    }

    await db.sequelize
      .transaction(async (t) => {
        createdRecord = await Subm.create(incomingInfo, {
          include: [{
            model: db.citizen,
          }] }, { transaction: t })
      });
    
    if (incomingInfo.email.length){
      console.log('sending email')
      let subject = `Thank you for your submission!`
      let message = `<p>Your tick ID # is ${createdRecord.id}.</p><p> View your submission form at <a href={"https://ticks.rutgers.edu/submission/${createdRecord.id}"}>https://ticks.rutgers.edu/submission/${createdRecord.id}</a>. </p> <p>Check your tick's progress at <a href={"https://ticks.rutgers.edu/progress/${createdRecord.id}"}>https://ticks.rutgers.edu/progress/${createdRecord.id}</a></p>`
      
      mailUser(incomingInfo.email, subject, message)
    }
    return res.json({ data: createdRecord })
  } catch (err) {
    console.log(err.message)
    next({ status: 400, message: err.message })
  }

}
// upload photos
exports.uploadPhoto = async (req, res, next) => {

  console.log(`@@@@---receiving image from website---@@@@`, JSON.stringify(req.files));
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
// get submission by id
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
          attributes: ['id', 'scientific', 'common'],
          include: [{ model: db.pathogen, attributes: ['id', 'pathogen', 'name'] }]
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
          attributes: ["id", "pathogen", "name"]
        },
        {
          model: db.citizen,
          attributes: ["id", "email"]
        },
        {
          model: db.message,
          include: [
            {
              model: db.users,
              as: 'admin',
              attributes: ['id', 'firstName', 'lastName']
            }
          ]
          // attributes: ['id', 'message', 'role', 'answered', 'createdAt'],
          // order: [['createdAt', 'asc']] // this isn't having an effect
        }
      ]
    })

    res.json({ record: foundRecord })


  } catch (err) {
    console.log(err.message)
    next(err)
  }
}
// get all submissions
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
        { model: db.message }

      ]
    })
    // console.log(JSON.stringify(foundSubs, null, 1))
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}
// get a page of submissions
exports.getSubPage = async (req, res, next) => {
  console.log(`@@@@---getting a page of submissions---@@@@`);
  console.log(`@@@@--- query ---@@@@`, req.query);

  try {

    let numLimit = req.query.numLimit ? parseInt(req.query.numLimit) : 3;
    let page = req.query.page > 0 ? parseInt(req.query.page) : 0;
    let filter = req.query.filter ? req.query.filter : '';

    if (filter === 'totalSubs') {
      query = { duplicate: { [Op.is]: null }, }
    } else if (filter === 'pendPhotos') {
      query = { duplicate: { [Op.is]: null }, photosReviewed: { [Op.is]: null }, }
    } else if (filter === 'pendReceived') {
      query = { duplicate: { [Op.is]: null }, specimenRequested: { [Op.not]: null }, specimenReceived: { [Op.is]: null } }
    } else if (filter === 'pendIdentified') {
      query = { duplicate: { [Op.is]: null }, specimenIdentified: { [Op.is]: null }, specimenReceived: { [Op.not]: null } }
    } else if (filter === 'totalIdent') {
      query = { duplicate: { [Op.is]: null }, specimenIdentified: { [Op.not]: null } }
    } else if (filter === 'notReq') {
      query = { duplicate: { [Op.is]: null }, photosReviewed: { [Op.not]: null }, specimenIdentified: { [Op.is]: null }, specimenRequested: { [Op.is]: null } }
    } else if (filter === 'questions') {
      // query = { duplicate: { [Op.is]: null }, messages: {id: {[Op.not]: null
      query = { duplicate: { [Op.is]: null }, [Op.not]: { '$messages$': null } }
      } else {
      query = { duplicate: { [Op.is]: null }, }
    }

    let foundSubs;

    await db.sequelize.transaction(async (t) => {
      foundSubs = await Subm.findAll({
        limit: numLimit,
        offset: page * numLimit,
        
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
          
          'messages',
            // where: {id: {[Op.not]: null}}
          
        ],
        where: query,
      }, { transaction: t })
    })

    console.log('@@@@@@@@@@@@@@@@@@@foundSubs', JSON.stringify(foundSubs, null, 1))
    // if (filter === 'questions') {
    //   foundSubs = foundSubs.filter(sub => sub.messages.length > 0 && sub.messages.filter(msg => !msg.answered).length > 0)
    // }

    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}

exports.getQuestions = async (req, res, next) => {
  console.log(`@@@@---getting a page of submissions with questions---@@@@`);
  console.log(`@@@@--- query ---@@@@`, req.query);

  try {

    let numLimit = req.query.numLimit ? parseInt(req.query.numLimit) : 3;
    let page = req.query.page > 0 ? parseInt(req.query.page) : 0;
    let foundSubs;

    await db.sequelize.transaction(async (t) => {
      foundSubs = await Subm.findAll({
        limit: numLimit,
        offset: page * numLimit,
        
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
            model: db.message,
            attributes: ['id', 'message', 'role', 'answered', 'createdAt'],
            where: {answered: {[Op.not]: true}}
          },
        ],
    
      }, { transaction: t })
    })
    res.json({ record: foundSubs })
  } catch (err) {
    console.log(err.message)
    next(err)
  }
}
// update submission
exports.updateSubm = async (req, res, next) => {

  //!! model.update allows you to pass in any changes as an object.  model.save requires you to specify the exact field changes.
  try {
    let { id } = req.params
    let data = req.body
    let updatedTick;

    await db.sequelize
      .transaction(async (t) => {

        await Subm.update(data, { paranoid: false, where: { id } }, { transaction: t })
        // console.log('updated', updated)
        // removed lastEmail from citizen because it is never used anywhere else originally was created to track if we were sending emails too frequently, like don't send an email if the last email was sent in the past hour, but we changed what we were sending emails for so that won't be an issue
        updatedTick = await Subm.findByPk(id, {
          include: [
            {
              model: db.citizen,
              attributes: ['id', 'email']
            },
            {
              model: db.ticks,
              as: 'photo',
              attributes: ['id', 'scientific', 'common']
            },
            {
              model: db.ticks,
              as: 'specimen',
              attributes: ['id', 'scientific', 'common'],
              include: db.pathogen,
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
    
    
    if (updatedTick.citizenId ){
      if (data.photoId || data.specimenId){
        console.log('emailing user about change')
        let subject = `NJTicks4Science Tick Update for tick id # ${updatedTick.id}`
        let message = `An update has been made to information regarding tick # ${updatedTick.id}.  Check your tick's progress by visiting <a href={"https://ticks.rutgers.edu/progress/${updatedTick.id}"}>https://ticks.rutgers.edu/progress/${updatedTick.id}</a>`
        mailUser(updatedTick.citizen.email, subject, message)
      }
    } 
    return res.json({ updatedTick })
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
      // raw: true,
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
exports.getDeleted = async (req, res, next) => {
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
exports.getDupes = async (req, res, next) => {
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

//** update the pathogens associated with the submission based on the identified species */
exports.updatePathos = async (req, res, next) => {
  console.log(`@@@@---updating submission pathogens ---@@@@`, req.params, req.body);
  try {

    let { pathogens: speciesPathos } = req.body
    let { id: subId } = req.params

    // for each sub_pathos relationship, there should be a sub id, a pathos id and a result

    await db.sequelize
      .transaction(async (t) => {
        //** get the submission object */
        let foundSub = await Subm.findByPk(subId, { include: db.pathogen }, { transaction: t })
        // console.log('foundSub', JSON.stringify(foundSub, null, 1))

        //** get the tests that belong to the submission that do not have a result */
        let subPathos = foundSub.pathogens.filter(item => item.submission_pathogen.result === 'pending').map(item => item.id)
        // console.log('speciesPathos', speciesPathos)
        // console.log('subPathos', subPathos)

        //** which species test are already assigned to the sub */
        let keepTests = subPathos.filter(item => speciesPathos.map(item => item.id).includes(item))
        console.log('keepTests', keepTests)
        let deleteTests = subPathos.filter(item => !speciesPathos.map(item => item.id).includes(item))
        console.log('deleteTests', deleteTests)
        let addTests = speciesPathos.filter(item => !subPathos.includes(item.id)).map(item => item.id)
        console.log('addTests', addTests)

        if (deleteTests.length) {
          await Sub_Pathos.destroy({
            where: {
              submissionId: subId,
              pathogenId: {[Op.in]:deleteTests}
            }
          }, { transaction: t })
        }
        if (addTests.length) {
          let addArray = addTests.map(item => {
            return { submissionId: subId, pathogenId: item, result: 'pending' }
          })
          console.log('addArray', addArray)
          await Sub_Pathos.bulkCreate(addArray, { transaction: t })
        }
      });

    // this has to be outside of the transaction to get the updated data
    let updatedSub = await Subm.findByPk(subId, {
      include: [
        { model: db.pathogen },
        {
          model: db.ticks,
          as: 'specimen',
          include: db.pathogen
        }
      ]
    })

    return res.json({ updatedSub })
  } catch (err) {
    console.log(err.message)
    next(err)
  }

}
exports.updateResult = async (req, res, next) => {
  console.log(`@@@@--- updating sub pathos results ---@@@@`);
  // console.log(JSON.stringify(req.body, null, 1))
  console.log(req.params)
  try {
    let updatedSub
    let { pathogenId, result } = req.body
    let { id } = req.params

    await db.sequelize
      .transaction(async (t) => {
        const foundShip = await Sub_Pathos.findOne({
          where: {
            submissionId: id,
            pathogenId,
          }
        }, { transaction: t })

        foundShip.result = result
        await foundShip.save({ transaction: t })



      });
    updatedSub = await Subm.findByPk(id, { include: db.pathogen })
    // console.log(JSON.stringify(updatedSub.pathogens, null, 1))
    return res.json({ updatedSub })
  } catch (err) {
    console.log(err.message)
    next(err)
  }

}