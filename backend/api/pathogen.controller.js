const db = require("../models");
// const Op = db.Sequelize.Op;
// const Subm = db.submission;
const Pathogen = db.pathogen;

// get all pathogens
exports.getAll = async (req, res, next) => {
  console.log(`@@@@---get all pathogens---@@@@`);

  try {
    let foundData;
    await db.sequelize.transaction(async (t) => {
      foundData = await Pathogen.findAll({ transaction: t })
    })
    if (foundData === null) {
      throw new Error(`no pathogens found`)
    }
    return res.json({ foundData })
  } catch (err) {
    next(err)
  }
}
// update one pathogen
exports.update = async (req, res, next) => {
  console.log(`@@@@---update pathogens ${req.params.id}---@@@@`, JSON.stringify(req.body));

  try {
    let foundData;
    let incomingInfo = req.body
    let { id } = req.params
    await db.sequelize.transaction(async (t) => {
      await Pathogen.update(incomingInfo, { where: { id }, transaction: t })
    })
    foundData = await Pathogen.findByPk(id)
    if (foundData === null) {
      throw new Error(`no pathogens found`)
    }

    return res.json({ foundData })
  } catch (err) {
    next(err)
  }
}