var answerDAO = require('../model/answerDAO')

module.exports = {
    addans: async (ctx, next) => {
        try {
            let jsondata = await answerDAO.getAllAnswer(ctx.params.reply_id)
            ctx.body = {"code": 200, "message": "ok", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
    addansw: async (ctx, next) => {
        try {
            //1.收集数据
            let query = ctx.request.body
            let answer = {};
            answer.reply_id=query.reply_id,
                answer.userId = query.userId,
                answer.content=query.content,
                answer.htime=query.htime,
                ctx.set('content-type', 'application/json');
            let jsondata = await answerDAO.addAnswer(answer);
            //3.反馈结果
            console.log(jsondata);
            ctx.body = {"code": 200, "message": "OK", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
}

