const db = require("../models");
const Message = db.message;
const { mailUser } = require("./mailHelper");

// create message
exports.createMessage = async (req, res, next) => {
    console.log(`@@@@---receiving form from website---@@@@`);
    try {
        let createdRecord;
        let incomingInfo = req.body;
        await db.sequelize
            .transaction(async (t) => {
                createdRecord = await Message.create(incomingInfo, { transaction: t })
            });
            // todo #141 find out if related submission has a citizenId, find out if sender of message is user or admin, send email if citizenId and admin
        // if (updatedTick.citizenId) {
        //     if (data.photoId || data.specimenId) {
        //         console.log('emailing user about change')
        //         let subject = `NJTicks4Science Tick Update for tick id # ${updatedTick.id}`
        //         let message = `An update has been made to information regarding tick # ${updatedTick.id}.  Check your tick's progress by clicking this link: <a href={"https://ticks.rutgers.edu/progress/${updatedTick.id}"}>https://ticks.rutgers.edu/progress/${updatedTick.id}</a>`
        //         mailUser(updatedTick.citizen.email, subject, message)
        //     }
        // } 
        return res.json({ data: createdRecord })
    } catch (err) {
        console.log(err.message)
        next({ status: 500, message: err.message })
    }

}
// update message
exports.updateMessage = async (req, res, next) => {
    try {
        let { id } = req.params
        let data = req.body
        let updatedMessage

        await db.sequelize
            .transaction(async (t) => {

                 await Message.update(data, {  where: { id } }, { transaction: t })
                 updatedMessage = await Message.findByPk(id, { transaction: t })

            })
            return res.json({ data: updatedMessage })
        } catch (err) {}
}