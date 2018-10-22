const router = require('koa-router')();
const mysql=require('mysql');
const path=require('path');
const formidable = require('formidable');
const replyDAO=require('../model/replyDAO');
const replyController = require('../controllers/replyController')

//设置根路由
router.prefix('/reply')

router.get('/', function (ctx, next) {
    ctx.set("Access-Control-Allow-Origin","*");
    ctx.body = '欢迎回复!'

    // ctx.set('content-type','application/json');
})

//针对一个商品编号添加一个评论文章的信息
router.post('/addReply', async (ctx, next) => {
    await replyController.addrepl(ctx,next)

})


//获取指定评论编号的全部回复信息
// router.get('/getAllReply', async (ctx, next) => {
//     try {
//         let data = await replyDAO.getAllReply(ctx.query.id);
//         ctx.body = {code: 200, message: 'ok', data: data};
//     } catch (e) {
//         ctx.body = {code: 500, message: '读取失败' + e.message}
//     }
// })
router.get('/allReply/:Cid',async (ctx,next)=>{
    await replyController.addrep(ctx,next)
})


//删除指定评论
router.get('/delReply', async (ctx, next) => {
    try {
        let data = await replyDAO.delReply(ctx.query.id);
        ctx.body = {code: 200, message: '删除成功', data: data};
    } catch (e) {
        ctx.body = {code: 500, message: '删除失败' + e.message}
    }
})

module.exports = router
