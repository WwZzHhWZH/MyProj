const DAO = require('../model/DAO')
class DB {
    //获取指定用户全部信息
    getOneUser(id){
        return DAO('select * from userinfo where userId = ?',[id])
    }
    //修改用户的信息
    altUser(user){
        return DAO('update userinfo set userName = ?,userpwd = ?,sex = ?, email = ?,identityNum = ?,usertel = ?,useraddr = ?,photo = ? where userId = ?',
            [user.userName,user.userpwd,user.sex,user.email,user.identityNum,user.usertel,user.useraddr,user.photo,user.userId])
    }
}
module.exports = new DB();