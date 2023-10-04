const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://john:12345@nodeexpressprojects.mxwjid6.mongodb.net/03-taskmanager?retryWrites=true&w=majority'
mongoose.connect(connectionString)
        .then(()=> console.log('connected to db'))
        .catch((err)=>console.log(err))


const connectDb = (url) =>{
    return mongoose.connect(connectionString)
}
module.exports = connectDb