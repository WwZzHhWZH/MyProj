var userDAO = require('../model/userDAO')
var crypto=require('crypto')
module.exports = {
    // 注册
        userregister: async (ctx, next) => {
        let query = ctx.request.body;
        let register = {};

        register.userId = query.userId;
        register.userName = query.userName;
        register.userpwd = query.userpwd;
        register.sex = query.sex;
        register.email = query.email;
        register.usetel = query.usertel;
        try{
            let jsondata = await userDAO.userregister(register);
            console.log(jsondata)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok"}
        }catch(err){
            ctx.body = {"code":500,"message":err.toString()}
          }
        },

    // 登录
    userlogin: async (ctx, next) => {
        try {
            let userName = ctx.request.body.userName;
            let userpwd = ctx.request.body.userpwd;


            let login = await userDAO.userlogin();
            let result = false;
            for (let i = 0;i < login.length;i++) {
                if (userpwd == login[i].userpwd && userName == login[i].userName) {
                    result = true;
                    ctx.body = {'code': 200, 'message': '登录成功', "data": result}
                    return;
                } else {
                    ctx.body = {'code': 200, 'message': '登录失败', "data":result};
                    result = false;
                }
            }
        }catch (err) {
            ctx.body = {"code": 500, "message": err.message}
        }
    },

    // 修改信息

    userperfect1: async (ctx, next) => {
        let query = ctx.request.body
        let perfect1 = {};
        perfect1.userId = query.userId,
            perfect1.userName = query.userName,
            // perfect.userpwd = query.userpwd,
            perfect1.sex = query.sex,
            perfect1.email = query.email,
            perfect1.usertel = query.usertel,
            perfect1.useraddr = query.useraddr,
            perfect1.photo = query.photo
1
        let jsondata = await userDAO.userperfect1(perfect1);
        ctx.set('content-type', 'application/json');
        ctx.body = {"code": 200, "message": "OK", data: jsondata}


        // await backDAO.updateProduct(id)
    },

    userperfect2: async (ctx, next) => {
        let query = ctx.request.body
        let perfect2 = {};
        perfect2.userId = query.userId,
            perfect2.userpwd = query.userpwd

        let jsondata = await userDAO.userperfect2(perfect2);
        ctx.set('content-type', 'application/json');
        ctx.body = {"code": 200, "message": "OK", data: jsondata}


        // await backDAO.updateProduct(id)
    },


};












