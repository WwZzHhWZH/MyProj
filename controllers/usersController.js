var userDAO = require('../model/userdb')
module.exports = {
    // getOneUser:async (ctx,next)=>{
    //     let jsondata = await userDAO.getOneUser();
    //     ctx.body = {"code": 200, "message": "ok", data: jsondata}

    //获取指定用户全部信息
        getOneUser: async (ctx, next) => {
            try {
                let jsondata = await userDAO.getOneUser(ctx.params.userId)
                ctx.body = {"code": 200, "message": "ok", data: jsondata}
            } catch (err) {
                ctx.body = {"code": 500, "message": err.toString(), data: []}
            }
    },
    //修改用户的信息
    altUser:async (ctx,next)=>{
        let query = ctx.request.body
        let user = {};
        user.userId=query.userId,
        user.userName = query.userName,
        user.userpwd = query.userpwd,
        user.sex = query.sex,
        user.email = query.email,
        // user.identityNum = query.identityNum,
        user.usertel = query.usertel,
        user.useraddr = query.useraddr,
        user.photo = query.photo
        let jsondata = await userDAO.altUser(user);
        ctx.set('content-type','application/json');
        ctx.body = {"code": 200, "message": "ok", data: jsondata}
    }
}