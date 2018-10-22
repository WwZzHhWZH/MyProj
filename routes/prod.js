const router = require('koa-router')()
const prodDAO = require('../model/prodDAO')
const prodController = require('../controllers/prodController')

router.prefix('/prod')
//根路由
router.get('/',async (ctx,next)=>{
    let jsondata = await prodDAO.getProd();
    ctx.body = {"code":200,"message":"ok",data:jsondata}
})
//商品详情
router.get('/details/:pId',async (ctx,next)=>{
    await prodController.addPro(ctx,next)
})
// // 小类商品
// router.get('/smallprod',async (ctx,next)=>{
//     await prodController.addsm(ctx,next)
// })
//所有大类
router.get('/big',async(ctx,next)=>{
    await prodController.getbig(ctx,next)
})
//所有小类
// router.get('/small',async(ctx,next)=>{
//     await prodController.getsm(ctx,next)
// })
//获取大类中的小类
router.get('/big/sm/:dlcode',async(ctx,next)=>{
    await prodController.getsm(ctx,next)
})
//获取指定大类商品
router.get('/big/:dlcode',async (ctx,next)=>{
    await prodController.addbg(ctx,next)
})
//获取指定小类商品
router.get('/sm/:dlcode/:xlcode',async (ctx,next)=>{
    await prodController.addsm(ctx,next)
})
module.exports = router
