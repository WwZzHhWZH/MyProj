var prodDAO = require('../model/prodDAO')
module.exports = {
    addPro: async (ctx, next) => {
        try {
            let jsondata = await prodDAO.getOneProd(ctx.params.pId)
            ctx.body = {"code": 200, "message": "ok", data: jsondata}
        } catch (err) {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    },
    addbg:async (ctx,next)=>{
        try{
            let jsondata = await prodDAO.getBigProd(ctx.params.dlcode)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (err) {
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    },
    getbig:async (ctx,next)=>{
        try{
            let jsondata = await prodDAO.getBig(ctx.params.dlcode)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (err) {
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    },
    // addsm:async (ctx,next)=>{
    //     try{
    //         let jsondata = await prodDAO.getSmallProd(ctx.params.dlcode.xlcode)
    //         ctx.body = {"code":200,"message":"ok",data:jsondata}
    //     }catch (err) {
    //         ctx.body = {"code":500,"message":err.toString(),data:[]}
    //     }
    // },
    addsm:async (ctx,next)=>{
        try{
            // let jsondata = await prodDAO.getSmallProd(ctx.params.dlcode.xlcode)
            let dlcode = ctx.params.dlcode;
            let xlcode = ctx.params.xlcode;
            let data = {
                dlcode:dlcode,
                xlcode:xlcode
            }
            let jsondata = await prodDAO.getSmallProd(data)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (err) {
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    },
    getsm:async (ctx,next)=>{
        try{
            let jsondata = await prodDAO.getSmall(ctx.params.dlcode)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (err) {
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    }
}
