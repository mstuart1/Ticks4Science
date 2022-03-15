const db = require("../models");
// const Op = db.Sequelize.Op;
const Subm = db.submission;

exports.createSubm = async (req, res, next) => {
    console.log(`@@@@---receiving form from arcgis---@@@@`);
    try {
        console.log(req.body)
        return res.json({status: "success", newContactId: newContact.id})
    } catch (err) {
        next({status: 400, message: err.message})
    }
  
}