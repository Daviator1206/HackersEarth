const { getUser } = require("../services/auth")

async function restrictToLoggedUserOnly(req, res, next){
    const userUid = req.cookies?.uid 
    if(!userUid){
        return res.redirect("/user/signin")
    }

    const user = getUser(userUid)
    if(!user) return res.redirect("/user/signin")
    req.user = user
    next()
}

async function chekAuth(req, res, next){
    const userUid = req.cookies?.uid
    const user = getUser(userUid)
    req.user = user
    next()
}


module.exports = {restrictToLoggedUserOnly, chekAuth}