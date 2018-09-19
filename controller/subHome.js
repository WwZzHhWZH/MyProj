const subDAO = require('../model/subDAO')
module.exports={
    all:async(ctx)=>{
       ctx.set('Access-Control-Origin','*')
       let jsondata = await subDAO.sode();
       console.log(jsondata)
       ctx.set('content-type','application/json')
       ctx.body = {code:200,message:'获取全部',data:jsondata};
   },
    sodeone:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')
        let jsondata = await subDAO.sodeOne(ctx.query.subId);
        ctx.set('content-type','application/json')
        ctx.body = {code:200,message:'获取单个',data:jsondata};
},
    sodeadd:async(ctx)=>{
        ctx.set('Access-Conttrol-Origin','*')
        ctx.set('content-type','application/json')
        let Value={
            subId:ctx.request.body.subId,
            orderId:ctx.request.body.orderId,
            pId:ctx.request.body.pId,
            pcount:ctx.request.body.pcount
        }
        console.log(Value)
        let jsondata = await subDAO.sodeAdd(Value);
        ctx.body = {code:200,message:'添加数据',data:jsondata}
    },
    sodedel:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')
        ctx.set('content-type','application/json')
        let jsondata = await subDAO.sodedel(ctx.query.subId);
        ctx.body = {code:200,message:'删除数据',data:jsondata}
    },
    up:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')
        ctx.set('content-type','application/json')
        let Values={
            subId:ctx.request.body.subId,
            orderId:ctx.request.body.orderId,
            pId:ctx.request.body.pId,
            pcount:ctx.request.body.pcount
        }
        let jsondata = await subDAO.sodeup(Values);
        ctx.body = {code:200,message:'修改',data:jsondata}
    }

}
