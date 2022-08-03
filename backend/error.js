const { sendMail } = require("./api/mailHelper");

exports.notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

exports.errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    sendMail('michelle.stuart@rutgers.edu', `Tick Error: ${error.message} at time: ${new Date()}`)
    console.log(`!!!!!@@@@ Error: ${error.message} @@@!!!!`)
    res.status(statusCode);
    res.send({
        message: error.message, 
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    });
};

