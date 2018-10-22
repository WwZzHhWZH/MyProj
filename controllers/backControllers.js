//把路由相应的业务分离出来
var backDAO = require('../model/backDAO')
module.exports = {
    //获取全部商品信息
    getAllProduct: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');//实现跨域请求，*任何请求都可以实现跨域
        //创建接口
        let jsondata = await backDAO.getAllProduct();
        // console.log(jsondata)
        //设置输出格式为json格式
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    //获取单个商品信息
    getOneProduct: async (ctx, next) => {
        let jsondata = await backDAO.getOneProduct(ctx.params.pId);
        // console.log(ctx.params.pId);
        ctx.set('content-type', 'application/json');
        ctx.body = {"code": 200, "message": "OK", data: jsondata}
    },
    //添加商品
    addProduct: async (ctx, next) => {
        //1.收集数据
        let query = ctx.request.body
        let product = {};
        product.pId = query.pId,
            product.xlcode = query.xlcode,
            product.pName = query.pName,
            product.plocation = query.plocation,
            product.pphoto = query.pphoto,
            product.pprice = query.pprice,
            product.present = query.present,
            product.stock = query.stock,
            // await backDAO.addProduct(product)
            // ctx.body = {"code": 200, "message": "OK", data: jsondata}
            ctx.set('content-type', 'application/json');
            let jsondata = await backDAO.addProduct(product);
            //3.反馈结果
            console.log(jsondata);
            ctx.body = {"code": 200, "message": "OK", data: jsondata}
    },
    //修改商品
    updateProduct: async (ctx, next) => {
        let query = ctx.request.body
        let product = {};
            product.pId = query.pId,
            product.xlcode = query.xlcode,
            product.pName = query.pName,
            product.plocation = query.plocation,
            product.pphoto = query.pphoto,
            product.pprice = query.pprice,
            product.present = query.present,
            product.stock = query.stock
        let jsondata = await backDAO.updateProduct(product);
        ctx.set('content-type', 'application/json');
        ctx.body = {"code": 200, "message": "OK", data: jsondata}


        // await backDAO.updateProduct(id)
    },
    //删除商品
    deleteProduct: async (ctx, next) => {

        let jsondata = await backDAO.deleteProduct(ctx.params.pId);
        console.log(ctx.params.pId);
        ctx.body = {"code": 200, "message": "OK", data: jsondata}

        // await backDAO.deleteProduct(pid)
    },
    end: async (ctx, next) => {
        if (1) {
            await backDAO.end()
        } else {
            ctx.body = {"code": 500, "message": err.toString(), data: []}
        }
    }
}