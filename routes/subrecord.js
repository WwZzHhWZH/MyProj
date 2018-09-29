const router = require('koa-router')()
const subHome = require('../controller/subHome')
// const subDAO = require('../model/subDAO')

router.prefix('/subrecord')
router.get('/all',async(ctx,next)=>{
    await subHome.all(ctx)
}).get('/subone',async(ctx,next)=>{
    await subHome.sodeone(ctx)
}).post('/subadd',async(ctx,next)=>{
    await subHome.sodeadd(ctx)
}).get('/subdel',async(ctx,next)=>{
    await subHome.sodedel(ctx)
}).post('/upsub',async(ctx)=>{
    await subHome.up(ctx)
})
module.exports = router;
