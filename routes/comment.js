const router = require('koa-router')();
const mysql=require('mysql');
const path=require('path');
const formidable = require('formidable');
const commentDAO=require('../model/commentDAO');
const commentController = require('../controllers/commentController')

//设置根路由
router.prefix('/comment')

router.get('/', function (ctx, next) {
    ctx.set("Access-Control-Allow-Origin","*");
    ctx.body = '欢迎评论!'

    // ctx.set('content-type','application/json');
})

//针对一个商品编号添加一个评论文章的信息
// console.log('...............................')
//     router.post('/save', async (ctx, next) => {
//         try {
//             let comment = {content: ctx.request.body};
//             await commentDAO.addComment(comment);
//             ctx.body = '发布成功';
//         } catch (e) {
//             ctx.body = '发布失败' + e.message;
//         }
//
//     }
router.post('/addComment',async(ctx,next)=>{
    await commentController.addComm(ctx,next)
})

    //加载一篇评论
    router.get('/loadComment/:id', async (ctx, next) => {
        console.log('get comment')
        try {
            let comment = {content: ctx.request.body.editor1};
            let data = await commentDAO.getOneComment(ctx.query.id);
            ctx.body = {code: 200, message: 'ok', data: data};
        } catch (e) {
            ctx.body = {code: 500, message: '读取失败' + e.message}
        }
    })

//上传图片到服务器
    router.post('/upload', async (ctx, next) => {
        ctx.set("Access-Control-Allow-Origin","*")
        ctx.set('content-type','application/json');
        const form = new formidable.IncomingForm();
        form.uploadDir = "../public/uploadfile";
        form.keepExtensions = true;
        let urlImages = [];
        return new Promise(function (resolve, reject) {
            form.parse(ctx.req, function (err, fields, files) {
                if (err) reject(err.message)
                console.log('获取文件了。。。。。')
                if (err) {
                    console.log(err);
                    return;
                }
                for (name in files) {
                    urlImages.push(path.parse(files[name].path).base)
                }
                console.log(urlImages);
                resolve(urlImages);
            })
        }).then((data) => {
            console.log(data)
            //按wangeditor格式，输出结果，把上传的文件名返回
            ctx.body = {errno: 0, data: data};
        })
    })

//获取指定商品编号的全部评论信息
// router.get('/allComment/:pId', async (ctx, next) => {
//     try {
//         let data = await commentDAO.getAllComment(ctx.params.pId);
//         ctx.body = {code: 200, message: 'ok', data: data};
//     } catch (e) {
//         ctx.body = {code: 500, message: '读取失败' + e.message}
//     }
// })
router.get('/allComment/:pId',async (ctx,next)=>{
    await commentController.addCom(ctx,next)
})

router.get('/oneComment/:Cid',async (ctx,next)=>{
    await commentController.addCo(ctx,next)
})

//删除指定评论
router.get('/delComment', async (ctx, next) => {
    try {
        let data = await commentDAO.delComment(ctx.query.id);
        ctx.body = {code: 200, message: '删除成功', data: data};
    } catch (e) {
        ctx.body = {code: 500, message: '删除失败' + e.message}
    }
})

module.exports = router