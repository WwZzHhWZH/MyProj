//关于用户对象的相关数据操作
const DAO=require('../model/DAO')

class DB{
    //获取全部收货人信息的方法
    getAllPeople(userId){
        return DAO('select * from shrinfo where userId = ?',[userId]);
    }

    // //获取指定编号的收货人信息方法
    getOnePeople(id){
        return DAO('select * from shrinfo where shrId = ?',[id]);
    }

    //添加收货人的信息方法
    addPeople(people){
        return DAO('insert into shrinfo values(?,?,?,?,?,?)',
            [people.shrId,people.userId,people.name,people.addr,people.postal,people.tel])
    }
    //修改收货人信息
    updatePeople(people){
        return DAO('update shrinfo set userId=?,name=?,addr=?,postal=?,tel=? where shrId = ?',
            [people.userId,people.name,people.addr,people.postal,people.tel,people.shrId])

    }

    //删除收货人的信息方法
    deletePeople(id){
        return DAO('delete from shrinfo where shrId = ?',[id]);
    }


}

module.exports = new DB();