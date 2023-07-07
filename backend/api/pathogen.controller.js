const db = require("../models");
// const Op = db.Sequelize.Op;
// const Subm = db.submission;
const Pathogen = db.pathogen;

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