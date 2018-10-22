const router = require('koa-router')()
//引入controllers
const controllers = require('../controllers/orderHome')
router.prefix('/order')
//user根路由
router.post('/all',async(ctx,next)=> {
    await controllers.orde(ctx)
}).get('/one',async(ctx,next)=>{
    await controllers.one(ctx)
}).post('/add',async(ctx,next)=>{
    await controllers.add(ctx)
}).get('/del',async(ctx,next)=>{
    await controllers.del(ctx)
}).post('/up',async(ctx,next)=>{
    await controllers.up(ctx)
})

module.exports =router;
