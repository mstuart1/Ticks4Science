require("dotenv").config();
const db = require("../models");
// const Op = db.Sequelize.Op;
const User = db.users;
const jwt = require("jsonwebtoken");
const mailHelper = require('./mailHelper')
const bcrypt = require('bcrypt')


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
        <a href="${process.env.CORS_ORIGIN}/createAccount/${token}">Create Account</a> to setup your account.</p>`


        await db.sequelize
            .transaction(async (t) => {
                // check to see if user already exists
                newUser = await User.findAll({
                    where: {
                        email: data.email
                    }
                })
                if (newUser.length > 0) {
                    await User.update(data, {
                        where: {
                            id: newUser[0].id
                        }
                    }, { transaction: t })
                    return res.json({ data: 'ALREADY_EXISTED' })
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
        let { id } = req.params;

        await db.sequelize
            .transaction(async (t) => {

                user = await User.findByPk(id, { attributes: { exclude: ["password"] } }, { transaction: t })


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
        let { token } = req.params;

        await db.sequelize
            .transaction(async (t) => {

                user = await User.findOne({
                    where: {
                        resetToken: token
                    }, attributes: { exclude: ["password"] }
                }, { transaction: t })


            })
        return res.json({ user })

    } catch (err) {
        console.log(err.message)
        next({ status: 500, message: err.message })
    }

}

exports.updateUser = async (req, res, next) => {
    console.log(`@@@@---updating user ${JSON.stringify(req.body, null, 1)}---@@@@`)
    try {
        let data = req.body
        let { id } = data
        // is changing the password every time?
        // if (data.password) {
        //     const salt = await bcrypt.genSalt(10);
        //     data.password = await bcrypt.hash(data.password, salt);
        // }
        let updatedUser
        await db.sequelize
            .transaction(async (t) => {

                await User.update(data, { where: { id } }, { transaction: t })
                updatedUser = await User.findByPk(id, {transaction: t})
            })
            console.log(updatedUser)
        return res.json({ data: updatedUser })

    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

exports.login = async (req, res, next) => {
    console.log(`@@@@---login user ${JSON.stringify(req.body, null, 1)}---@@@@`)
    try {
        let { email, password } = req.body
        let foundUser, accessToken
        await db.sequelize.transaction(async (t) => {
            foundUser = await User.findOne({
                where: {
                    email
                }
            }, { transaction: t })
        })
        if (foundUser === null) {
            return res.json({ message: 'BAD_USER' })
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            return res.json({ message: 'BAD_PASSWORD' })
        } else {
            accessToken = jwt.sign(
                { id: foundUser.id, grant: foundUser.manageUsers },
                process.env.SECRET_KEY,
                { expiresIn: "2h" }
            );
        }
        res.header("Authorization", "Bearer " + accessToken);
        res.json({ token: accessToken, data: foundUser })
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

exports.forgot = async (req, res, next) => {
    console.log(`@@@@----someone forgot their password ${req.body}---@@@@`)
    try {
        let { email } = req.body
        let foundUser
        await db.sequelize.transaction(async (t) => {
            foundUser = await User.findOne({
                where: {
                    email
                }
            }, { transaction: t })

            if (foundUser === null) {
                return res.json({ message: 'BAD_USER' })
            }
            else {
                accessToken = jwt.sign(
                    { id: foundUser.id, grant: foundUser.manageUsers },
                    process.env.SECRET_KEY,
                    { expiresIn: "24h" }
                );
                let message = `This email has been sent to you because the "forgot password" form was filled out.  If you did not fill out the "forgot password" form, please disregard this email.  If you did indeed forget your password, please click the link to reset it.  This link will expire 24 hours from when this email was sent.<a href='${process.env.CORS_ORIGIN}/admin/reset/${accessToken}'>Click this link</a>`
                await mailHelper.sendMail(foundUser.email, message)
                await User.update({ resetToken: accessToken }, {
                    where: {
                        id: foundUser.id
                    }
                }, { transaction: t })
            }
        })
        res.json({ message: 'EMAIL_SENT' })
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

exports.getAllUsers = async (req, res, next) => {
    console.log(`@@@@---getting all users---@@@@`)
    try {
        // console.log(JSON.stringify(req.body, null, 1))
        let users;

        await db.sequelize
            .transaction(async (t) => {

                users = await User.findAll({ transaction: t })
            })
        return res.json({ users })
    } catch (err) {
        console.log(`!!!! Error !!!!`, err.message)
        next(err)
    }
}

