require("dotenv").config();
const db = require("../models");
// const Op = db.Sequelize.Op;
const User = db.users;
const jwt = require("jsonwebtoken");
const mailHelper = require('./mailHelper')

exports.inviteUser = async (req, res, next) => {
    console.log(`@@@@---invite User ${JSON.stringify(req.body, null, 1)}---@@@@`);
    // console.log(JSON.stringify(req.body, null, 1))
    try {

        // console.log(JSON.stringify(req.body, null, 1))
        let newUser;
        let data = req.body;
        let expiration = '24h'

        let token = jwt.sign({},
            process.env.SECRET_KEY,
            { expiresIn: expiration }
        );

        data.resetToken = token;

        let message = ` <p>Dr. Dina Fonseca is inviting you to participate in the administration of the tick survey system, Ticks for Science. Please follow the link to create an account.  The link will expire in ${expiration} so please follow the link as soon as possible.
        <a href="${process.env.CORS_ORIGIN}/tick-map/admin/createAccount/${token}">Create Account</a> to setup your account.</p>`


        await db.sequelize
            .transaction(async (t) => {
                // check to see if user already exists
                newUser = await User.findAll({
                    where: {
                        email: data.email
                    }
                })
                if (newUser.length > 0) {
                    await User.update(data,{
                        where: {
                            id: newUser[0].id 
                        }
                    } ,{transaction: t})
                    return res.json({ data: newUser[0] })
                } else {
                    // create new user
                    newUser = await User.create(data, { transaction: t })
                    await mailHelper.sendMail(newUser.email, message);
                    console.log(JSON.stringify(newUser, null, 1))
                    return res.json({ data: newUser })
                }
            });
    } catch (err) {
        console.log(err.message)
        next({ status: 500, message: err.message })
    }

}

exports.getUser = async (req, res, next) => {
    console.log(`@@@@---get User ${JSON.stringify(req.body, null, 1)}---@@@@`);
    // console.log(JSON.stringify(req.body, null, 1))
    try {

        // console.log(JSON.stringify(req.body, null, 1))
        let user;
        let {id} = req.params; 

        await db.sequelize
            .transaction(async (t) => {
                
                user = await User.findByPk(id, {attributes: {exclude: ["password"]}}, {transaction: t})
                
                    
                 })
                 return res.json({ data: user })
            
    } catch (err) {
        console.log(err.message)
        next({ status: 500, message: err.message })
    }

}

exports.getByToken = async (req, res, next) => {
    console.log(`@@@@---get User ${JSON.stringify(req.body, null, 1)}---@@@@`);
    // console.log(JSON.stringify(req.body, null, 1))
    try {

        // console.log(JSON.stringify(req.body, null, 1))
        let user;
        let {token} = req.params; 

        await db.sequelize
            .transaction(async (t) => {
                
                user = await User.findOne({where: {
                    resetToken: token
                }, attributes: {exclude: ["password"]}},{transaction: t})
                
                   
                 })
                 return res.json({ data: user })
            
    } catch (err) {
        console.log(err.message)
        next({ status: 500, message: err.message })
    }

}

exports.updateUser = async (req, res, next) => {
    console.log(`@@@@---updating user ${JSON.stringify(req.body, null, 1)}---@@@@`)
    try {
        let data = req.body
        let {id} = data

        await db.sequelize
        .transaction(async (t) => {
            
            await User.update(data, {where: {id}}, {transaction: t})



        })
        
        


        return res.json({message: 'ok'})

    } catch (err) {
        console.log(err.message)
        next(err)
    }
}




