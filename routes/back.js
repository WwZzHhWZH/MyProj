const router = require('koa-router')()

const backControllers = require('../controllers/backControllers')
router.prefix('/back')
//获取全部
router.get('/',async (ctx,next)=>{
    await backControllers.getAllProduct(ctx,next)
})
//获取单个
router.get('/getOneProduct/:pId',async (ctx,next)=>{
    await backControllers.getOneProduct(ctx,next)
})
//增加
router.post('/addProduct',async (ctx,next)=>{
    await backControllers.addProduct(ctx,next)
})
//修改
router.post('/updateProduct',async (ctx,next)=>{
    await backControllers.updateProduct(ctx,next)
})
//删除
router.get('/deleteProduct/:pId',async (ctx,next)=>{
    await backControllers.deleteProduct(ctx,next)
})


module.exports = router