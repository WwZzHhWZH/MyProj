const router = require('koa-router')()
//引入controller
const controller = require('../controller/orderHome')
router.prefix('/order')
//user根路由
router.post('/all',async(ctx,next)=> {
    await controller.orde(ctx)
}).get('/one',async(ctx,next)=>{
    await controller.one(ctx)
}).post('/add',async(ctx,next)=>{
    await controller.add(ctx)
}).get('/del',async(ctx,next)=>{
    await controller.del(ctx)
}).post('/up',async(ctx,next)=>{
    await controller.up(ctx)
})

module.exports =router;
