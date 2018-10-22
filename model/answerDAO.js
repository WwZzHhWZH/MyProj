
const DAO=require('../model/DAO');


class DB {

    getAllAnswer(id){
        // return DAO('select * from reply where reply.Cid=comment.Cid and comment.Cid=?',[id]);
        return DAO('SELECT *from answer,userInfo where reply_id=? and answer.userId=userInfo.userId',[id]);
    }
    //针对一个评论编号添加一个回复的信息方法
    addAnswer(answer) {
        return DAO( 'insert into answer(reply_id,userId,word,htime) values(?,?,?,?)',
            [answer.reply_id,answer.userId,answer.word,answer.htime]
        );

    }
    //删除指定回复
    // delReply(id){
    //     return DAO('delete from reply where reply_id=?',[id])
    // }
}
module.exports=new DB();