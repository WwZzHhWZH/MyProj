const router = require('koa-router')();
const controllers = require('../model/userDAO');
const userController = require('../controllers/userController')

router.prefix('/home');
//用户注册
router.post('/userregister',async (ctx,next)=>{
    // let jsondata =  await userregister(ctx,next);
    await userController.userregister(ctx,next)
    // ctx.body = {code:200,message:'ok',data:};
})
//用户登录
router.post('/login',async (ctx,next)=>{
    // let jsondata = userController.userlogin(ctx)
    await userController.userlogin(ctx,next)
    // ctx.body = {code:200,message:'ok',data:jsondata};
})

//修改信息
// router.post('/perfect',async (ctx,next)=> {
//     let jsondata = userController.userperfect(ctx);
//     ctx.body = {code: 200, message: 'ok', data: jsondata};
// })
// 个人信息修改
router.post('/perfect1',async (ctx,next)=>{
    await userController.userperfect1(ctx,next)
})
// 账户管理修改
router.post('/perfect2',async (ctx,next)=>{
    await userController.userperfect2(ctx,next)
})

// //用户头像上传接口
//     router.post('/',async (ctx,next)=> {
//         let jsondata = userController.userperfect(ctx);
//         ctx.body = {code: 200, message: 'ok', data: jsondata};
//     })
// //用户昵称
//         router.post('/',async (ctx,next)=>{
//             let jsondata = userController.userperfect(ctx);
//             ctx.body = {code:200,message:'ok',data:jsondata};
//         })
// //修改用户密码
// router.post('/perfect/password',async (ctx,next)=>{
//     let jsondata = changepwdController.userchangpwd(ctx,next);
//     ctx.body = {code:200,message:'ok',data:jsondata};
// })


module.exports = router
