const express = require("express")
const app = express()
const tasks = require('./routes/tasks')
// const port = 4500
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('task manager app')
})
//middleware
app.use('api/v1/tasks',tasks)
const port = 40000
app.listen(port,console.log(`the server is listening to ${port}`))
