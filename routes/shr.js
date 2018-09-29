const router = require('koa-router')()
const shrControllers = require('../controllers/shrControllers')
router.prefix('/shr')
//获取全部收货人信息
router.get('/',async (ctx,next)=>{
    // console.log('1111')
    await shrControllers.getAllPeople(ctx,next)
})

//获取指定的收货人信息
router.get('/getOnePeople/:shrId',async (ctx,next)=>{
    await shrControllers.getOnePeople(ctx,next)
})

//添加收货人信息
router.post('/addPeople',async (ctx,next)=>{
    await shrControllers.addPeople(ctx,next)
})

//修改收货人信息
router.post('/updatePeople',async (ctx,next)=>{
    await shrControllers.updatePeople(ctx,next)
})

//删除收货人信息
router.get('/deletePeople/:shrId',async (ctx,next)=>{
    await shrControllers.deletePeople(ctx,next)
})


module.exports = router