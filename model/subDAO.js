const DAO = require('../model/DAO')

class DB{
    sode(){
        return DAO('select * from `subrecord`',[])
    }
    sodeOne(Id){
        return DAO('select * from `subrecord` where priceId = ?',[Id])
    }
    sodeAdd(sav){
        return DAO('insert into `subrecord` values(?,?,?,?,?)',
            [sav.subId,sav.pId,sav.pcount,sav.pmoney,sav.userId]
        )}
    sodedel(del){
        return DAO('delete from `subrecord` where subId=?',[del])
    }
    sodeup(up){
        return DAO('update `subrecord`  set subId=?,pId=?,pcount=?,pmoney=?,userId',
            [up.subId,up.pId,up.pcount,up.pmoney,up.userId])
    }
}
module.exports = new DB();