const DAO = require('../model/DAO')
class DB {
    getProd(){
    //获取全部商品信息
        return DAO('select * from product',[])
    }
    //获取指定商品的信息
    getOneProd(id){
        return DAO('select * from product where pId = ?',[id]);
    }
    // //获取小类商品信息
    // getSmallProd(id){
    //     return DAO('select * from cpxl,product where cpxl.xlcode = product.xlcode',[id])
    // }
    //获取全部大类
    getBig(){
        return DAO('select * from cpdl',[])
    }
    //获取全部小类
    // getSmall(){
    //     return DAO('select * from cpxl',[])
    // }
    // 获取大类中的小类
    getSmall(dlcode){
        return DAO('select * from cpxl where dlcode = ?',[dlcode])
    }
    //获取指定大类商品信息
    getBigProd(dlcode){
        return DAO('select * from product where dlcode = ?',[dlcode])
    }
    //获取指定小类商品信息
    getSmallProd(code){
        return DAO('SELECT * FROM product where dlcode = ? and xlcode = ?',[code.dlcode,code.xlcode])
    }

}
module.exports = new DB()
