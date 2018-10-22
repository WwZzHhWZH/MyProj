var shrDAO = require('../model/shrDAO')
module.exports = {
    //获取全部收货人信息
    getAllPeople: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await shrDAO.getAllPeople(ctx.params.userId);
        console.log(jsondata)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    //获取指定收货人信息
    getOnePeople: async (ctx, next) => {
        let jsondata = await shrDAO.getOnePeople(ctx.params.shrId);
        // console.log(ctx.params.shrId);
        ctx.body = {"code": 200, "message": "OK", data: jsondata}
    },
    //添加收货人信息
    addPeople: async (ctx, next) => {
        console.log(ctx.request.body);
        let people = {};
        people.shrId=ctx.request.body.shrId;
        people.userId=ctx.request.body.userId;
        people.name=ctx.request.body.name;//post
        people.addr=ctx.request.body.addr;
        people.postal=ctx.request.body.postal;
        people.tel=ctx.request.body.tel;


        // let query = ctx.request.body
        // let people = {};
        // people.shrId = query.shrId,
        //     people.name = query.name,
        //     people.addr = query.addr,
        //     people.postal = query.postal,
        //     people.tel = query.tel,

            // await backDAO.addProduct(product)
            // ctx.body = {"code": 200, "message": "OK", data: jsondata}

        //     ctx.set('content-type', 'application/json');
        // let jsondata = await shrDAO.addPeople(people);
        // console.log(jsondata);
        // ctx.body = {"code": 200, "message": "OK", data: jsondata}

        try{
            //2.调用用户数据访问对象的添加方法
            await shrDAO.addPeople(people)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(err){
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    },

    //修改收货人信息
    updatePeople: async (ctx, next) => {
        console.log(ctx.request.body);
        let people = {};
        people.shrId=ctx.request.body.shrId;
        people.userId=ctx.request.body.userId;
        people.name=ctx.request.body.name;//post
        people.addr=ctx.request.body.addr;
        people.postal=ctx.request.body.postal;
        people.tel=ctx.request.body.tel;
        // let jsondata = await shrDAO.updatePeople(people);
        // ctx.set('content-type', 'application/json');
        // ctx.body = {"code": 200, "message": "OK", data: jsondata}
        try{
            //2.调用用户数据访问对象的添加方法
            await shrDAO.updatePeople(people)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(err){
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
        },
//删除收货人信息
    deletePeople: async (ctx, next) => {

        let jsondata = await shrDAO.deletePeople(ctx.params.shrId);
        console.log(ctx.params.shrId);
        ctx.body = {"code": 200, "message": "OK", data: jsondata}
        },




}