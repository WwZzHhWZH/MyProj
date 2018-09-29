const DAO = require('../model/DAO')

class DB{
//获取全部数据
    getOrderall(){
        return DAO('select * from `order`',[])
    }

//根据订单编号查找信息
    getOrderone(aId){
    return DAO('select * from `order` where orderId = ?',[aId])
}
//添加购物车信息
    addOrder(user){
        return DAO('insert into `order`(orderId,userId,shrId,otime) values(?,?,?,?)',
            [user.orderId,user.useId,user.shrId,user.otime]
        )}

//删除购物车信息
    delOrder(del){
    return DAO('delete from `order` where orderId=?',[del]
    )}
//修改购物车信息
    upOrder(up){
        return DAO('update `order` set userId=?,shrId=?,otime=? where orderId=?',
            [up.userId,up.shrId,up.otime,up.orderId])
    }
}
module.exports=new DB();