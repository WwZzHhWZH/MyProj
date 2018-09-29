//关于用户对象的相关数据操作
const DAO=require('../model/DAO')

class DB{
    //获取全部商品信息的方法
    getAllProduct(){
        return DAO('select * from product',[]);
    }

    // //获取指定编号的商品信息方法
    getOneProduct(id){
        return DAO('select * from product where pId = ?',[id]);
    }

    //添加一个商品的信息方法
    addProduct(product){
        return DAO('insert into product values(?,?,?,?,?,?,?,?)',
            [product.pId,product.xlcode,product.pName,product.plocation,product.pphoto,product.pprice,product.present,product.stock])
    }
    //修改一个商品的信息方法
    updateProduct(product){
        return DAO('update product set xlcode=?,pName=?,plocation=?,pphoto=?,pprice=?,present=?,stock=? where pId = ?',
        [product.xlcode,product.pName,product.plocation,product.pphoto,product.pprice,product.present,product.stock,product.pId])

    }
    //删除一个商品的信息方法
    deleteProduct(id){
        return DAO('delete from product where pId = ?',[id]);
    }
}
module.exports = new DB();