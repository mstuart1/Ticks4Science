const Message = db.message;

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