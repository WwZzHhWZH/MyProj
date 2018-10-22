var commentDAO = require('../model/commentDAO')

module.exports = {
    addCom: async (ctx, next) => {
        try {
            let jsondata = await commentDAO.getAllComment(ctx.params.pId)
            ctx.body = {"code": 200, "message": "ok", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
    addCo: async (ctx, next) => {
        try {
            let jsondata = await commentDAO.getOneComment(ctx.params.Cid)
            ctx.body = {"code": 200, "message": "ok", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
    addComm: async (ctx, next) => {
        try {
            //1.收集数据
            let query = ctx.request.body
            let comment = {};
            comment.userId=query.userId,
            comment.pId = query.pId,
                comment.content=query.content,
                comment.pltime=query.pltime,
                comment.photo=query.photo
                ctx.set('content-type', 'application/json');
            let jsondata = await commentDAO.addComment(comment);
            //3.反馈结果
            console.log(jsondata);
            ctx.body = {"code": 200, "message": "OK", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },

}



