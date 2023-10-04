// console.log('Task Manager App')
// const express = require('express')
// const app= express()
// const task = require('./routes/task')
// const connectDb=require('./db/connect')
// // const { connect } = require('http2')
// app.use(express.json())
// app.get('/hello',(req,res)=>{
//     res.send('Task Manager App')
// })
// app.use('/api/v1/task',task)
// const port =3500

// const start = async() => {
//     try{
//         await connectDb()
//         app.listen(port,console.log(`server is listening to ${port}`))
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// start()
// // app.listen(port,console.log(`server is listening to port ${port}`))

const express = require('express')
const app= express()
const task = require('./routes/task')
const connectDb=require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// const { connect } = require('http2')
app.use(express.static('./public'))
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/task',task)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port =3500

const start = async() => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening to ${port}`))
    }
    catch(error){
        console.log(error)
    }
}
start()
// app.listen(port,console.log(`server is listening to port ${port}`))
