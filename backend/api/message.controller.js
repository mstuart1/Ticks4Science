const db = require("../models");
const Message = db.message;

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