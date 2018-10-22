//关于评论文章对象的相关操作
const DAO=require('../model/DAO');


class DB {
    //获取指定商品编号的全部评论信息的方法
    getAllComment(id){
        return DAO('select * from comment,userInfo where pId=? and comment.userId=userInfo.userId',[id])
        // return DAO('select * from comment,product,userInfo where comment.pId=product.pId and product.pId=? and comment.userId=userInfo.userId and userInfo.userId=? ',[id1,id2]);
    }
    //获取指定评论编号的评论文章信息方法
    getOneComment(id) {
        return DAO('select * from comment,userInfo where Cid = ? and comment.userId=userInfo.userId',[id]);
    }

    //针对一个商品编号添加一个评论文章的信息方法
    // addComment(comment) {
    //     return DAO( 'insert into comment(userId,pId,content,pltime,photo) values(?,?,?,?,?)',
    //         [comment.content.userId,comment.content.PId,comment.content.content,comment.content.pltime,comment.content.photo]
    //     );
    addComment(comment){
        return DAO('insert into comment(userId,pId,content,pltime,photo) values(?,?,?,?,?)',
            [comment.userId,comment.pId,comment.content,comment.pltime,comment.photo]
            )

    }
    //删除指定评论
    delComment(id){
        return DAO('delete from comment where Cid=?',[id])
    }
}
module.exports=new DB();