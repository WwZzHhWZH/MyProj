const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const back=require('./routes/back')
const index = require('./routes/index')
const users = require('./routes/users')
const shr=require('./routes/shr')
const prod=require('./routes/prod')
const order=require('./routes/order')
const subrecord=require('./routes/subrecord')
const cors = require('koa2-cors')
const user = require('./routes/user')
const comment = require('./routes/comment')
const reply = require('./routes/reply')
const answer = require('./routes/answer')




// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 跨域请求
app.use(cors({
    origin: function (ctx) {
        return 'http://localhost:8080'; //这样就能只允许 http://localhost:63342 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(back.routes(), back.allowedMethods())
app.use(shr.routes(), back.allowedMethods())
app.use(prod.routes(), prod.allowedMethods())
app.use(order.routes(), order.allowedMethods())
app.use(subrecord.routes(), subrecord.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(comment.routes(),comment.allowedMethods())
app.use(reply.routes(),reply.allowedMethods())
app.use(answer.routes(),answer.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
