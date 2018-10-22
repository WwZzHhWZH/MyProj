//关于回复对象的相关操作
const DAO=require('../model/DAO');


class DB {
    //获取指定评论编号的全部回复信息的方法
    getAllReply(id){
        // return DAO('select * from reply where reply.Cid=comment.Cid and comment.Cid=?',[id]);
        return DAO('SELECT *from reply,userInfo where Cid=? and reply.userId=userInfo.userId',[id]);
    }
    //针对一个评论编号添加一个回复的信息方法
    addReply(reply) {
        return DAO( 'insert into reply(Cid,userId,content,hftime) values(?,?,?,?)',
            [reply.Cid,reply.userId,reply.content,reply.hftime]
        );

    }
    //删除指定回复
    delReply(id){
        return DAO('delete from reply where reply_id=?',[id])
    }
}
module.exports=new DB();