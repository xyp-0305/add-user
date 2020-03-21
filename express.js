/*
  设置路由
*/

const express = require("express")
const {mongoose,User} = require('./mongoose')

const app = express()

// 设置模板引擎
app.set('views','./views') // 添加视图路径
app.engine('html', require('ejs').renderFile) // 将ejs模板映射至".html"文件
app.set('view engine','html') // 设置视图引擎

// 配置静态资源路径
app.use(express.static('static'))

// 配置路由与渲染的模板
app.get('/view',(req,res)=>{
    res.render('test')
})

// app.get('/',(req,res)=>{
//   res.send('hello world')
// })

// 使用mongoose建立接口，添加数据到MongoDB
app.get('/addUser',(req,res)=>{
    let data = {
        name: req.query.name,
        age: req.query.age,
        sex: req.query.sex
    }
    const addUser = new User(data)
    addUser.save()
    res.send(JSON.stringify(data))
})

app.listen('3000',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('server start success')
})