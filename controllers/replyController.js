var replyDAO = require('../model/replyDAO')

module.exports = {
    addrep: async (ctx, next) => {
        try {
            let jsondata = await replyDAO.getAllReply(ctx.params.Cid)
            ctx.body = {"code": 200, "message": "ok", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
    addrepl: async (ctx, next) => {
        try {
            //1.收集数据
            let query = ctx.request.body
            let reply = {};
            reply.Cid=query.Cid,
                reply.userId = query.userId,
                reply.word=query.word,
                reply.hftime=query.hftime,
            ctx.set('content-type', 'application/json');
            let jsondata = await replyDAO.addReply(reply);
            //3.反馈结果
            console.log(jsondata);
            ctx.body = {"code": 200, "message": "OK", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
}

