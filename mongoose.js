/*
  建立数据库连接
  用mongoose.Schema 插入数据
*/

const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/test" // 本地数据库地址
mongoose.connect(url)

// connect()返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connect error:'))
db.once('open', () => {
    console.log('Successful connection to ' + url)
})

const Schema = mongoose.Schema //schema 都会映射到一个 MongoDB collection

let user = {
    name:String,
    age:Number,
    sex:String
}

const userShema = Schema(user)
const User = mongoose.model('User', userShema) //将schema编译为model构造函数

// const newUser = new User({
//     name:'网红',
//     age:35,
//     sex:'男'
// }) // Mongoose 会自动找到名称是 model 名字复数形式的 collection
// newUser.save()

module.exports = {mongoose,User}