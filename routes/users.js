const router = require('koa-router')()
const userDAO = require('../model/userdb')
const userController = require('../controllers/usersController')

router.prefix('/users')

router.get('/getOneUser/:userId',async (ctx,next)=>{
  await userController.getOneUser(ctx,next)
})
router.post('/altUser',async (ctx,next)=>{
    await userController.altUser(ctx,next)
})
module.exports = router
