const db = require("../models");
const Message = db.message;
const Submission = db.submission;
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
            if (incomingInfo.role === 'admin') {
                let foundSub = await Submission.findByPk(incomingInfo.submissionId, { include: db.citizen })
                console.log(JSON.stringify(foundSub, null, 1))
                if (foundSub.citizenId){
                    let subject = `NJTicks4Science - New Message`
                    let message = `<p>You have been sent a message regarding your submission.</p><p> <strong>${incomingInfo.message}</strong></p> <p>View your submission at <a href={"https://ticks.rutgers.edu/progress/${foundSub.id}"}>https://ticks.rutgers.edu/progress/${foundSub.id}</a></p>`
                    mailUser(foundSub.citizen.email, subject, message)
                }
            }
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