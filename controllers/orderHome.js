//把路由相应的业务分离出来
const orderDAO = require('../model/orderDAO')
module.exports={
    orde:async (ctx)=>{
        ctx.set('Access-Control-Origin', '*')//实现跨域请求，*任何请求都可以实现跨域,*还可以换成地址，代表只有这个地址能够访问我
//创建接口
        let jsondata = await orderDAO.getOrderall();
//设置输出格式为json格式
        ctx.set('content-type', 'application/json');
        ctx.body = {code:200,message:'获取全部  ok',data:jsondata};

    },
    one:async(ctx)=>{
        ctx.set('Access-Control-Origin', '*')
        let jsondata = await orderDAO.getOrderone(ctx.query.orderId);
        ctx.set('content-type','application/json');
        ctx.body = {code:200,message:'查询单个 ok',data:jsondata};
    },
    add:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')
        ctx.set('content-type','application/json');
        let Revalue = {
            orderId:ctx.request.body.orderId,
            useId:ctx.request.body.useId,
            shrId:ctx.request.body.shrId,
            otime:ctx.request.body.otime
        }
            // [user.orderId,user.useId,user.shrId,user.otime]
        // console.log('输出'+)
        let jsondata = await orderDAO.addOrder(Revalue);
        ctx.body ={code:200,message:'add ok',data:jsondata};
    },
    del:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')

        ctx.set('content-type','application/json');

        let jsondata = await orderDAO.delOrder(ctx.query.oderId);
        ctx.body = {code:200,message:'删除 ok',data:jsondata};
    },
    up:async(ctx)=>{
        ctx.set('Access-Control-Origin','*')
       let UPI={

            userId:ctx.request.body.userId,
            shrId:ctx.request.body.shrId,
            otime:ctx.request.body.otime,
           orderId:ctx.request.body.orderId
        }
        let jsondata = await orderDAO.upOrder(UPI);
        ctx.set('content-type','application/json');
        ctx.body = {code:200,message:'update ok',data:jsondata};
    }
}



