const DAO = require('../model/DAO')

class DB{
    sode(){
        return DAO('select * from `subrecord`',[])
    }
    sodeOne(Id){
        return DAO('select * from `subrecord` where orderId = ?',[Id])
    }
    sodeAdd(sav){
        return DAO('insert into `subrecord` values(?,?,?,?)',
            [sav.subId,sav.orderId,sav.pId,sav.pcount]
        )}
    sodedel(del){
        return DAO('delete from `subrecord` where subId=?',[del])
    }
    sodeup(up){
        return DAO('update `subrecord`  set subId=?,orderId=?,pId=?,pcount=?',
            [up.subId,up.orderId,up.pId,up.pcount])
    }
}
module.exports = new DB();