const DAO = require('../model/DAO')
class DB {
    //用户注册
    userregister(register) {
        return DAO('insert into userinfo(userId,userName,userpwd,sex,email,usertel) VALUES(?,?,?,?,?,?)',
            [register.userId, register.userName, register.userpwd, register.sex, register.email, register.usertel]);
    }
    //用户登录
    userlogin() {
        return DAO('select userpwd,userName  from userinfo',[]);
    }

    //用户(修改)完善信息
    userperfect1(perfect) {
        return DAO('update userinfo set userName = ?,sex=?,email = ?,usertel=?,useraddr = ?,photo=? where userId =?',
            [perfect.userName,perfect.sex, perfect.email,perfect.usertel,perfect.useraddr,perfect.photo,perfect.userId]);
    }



userperfect2(perfect2) {
    return DAO('update userinfo set userpwd where userId =?',
        [perfect2.userpwd,perfect2.userId]);
}

}

module.exports = new DB();