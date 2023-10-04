// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// },1000)
// const names=require('./names')
// const hi=require('./util')
// const we=require('./alternative')
// const add=require('./addition')
// console.log(names)
// hi('susan')
// hi(names.john)
// console.log(we)
// // os module
// const os = require('os')
// const user =os.userInfo()
// console.log(user)
// console.log(`The System Uptime is : ${os.uptime()}seconds`)
// const currentOs={
// name:os.type(), 
// release:os.release(),
// totleMen:os.totalmem(),
// freeMen:os.freemem(),
// }
// // file path
// console.log(currentOs)
// const path=require('path')
// console.log(path.sep)
// const filePath = path.join('/content/','subfolder','test.txt')
// console.log(filePath)
// const base = path.basename(filePath)
// console.log(base)
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)
// // sync
// const {readFileSync , writeFileSync}=require('fs')
// const first = readFileSync('./content/first.txt','utf8')
// const second= readFileSync('./content/second.txt','utf8')
// console.log(first,second)
// writeFileSync('./content/result.txt',
// `result : ${first}, ${second}`,
// {flag : 'a'}
// )
// // async
// const {readFile , writeFile } = require('fs')
// readFile('./content/first.txt','utf8',(err,result) => {
// if(err){
//     console.log(err)
//     return
// }
// const first = result
// // console.log(result)
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result
//     writeFile('./content/result.txt',
//     `result : ${first},${second}`,
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('done with task')
//     })
// })
// })
// console.log('starting with next task')
// // start-async
// const {readFileSync , writeFileSync}=require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt','utf8')
// const second= readFileSync('./content/second.txt','utf8')
// writeFileSync('./content/result.txt',
// `result : ${first}, ${second}`,
// {flag:'a'})
// console.log('done with the task')
// console.log('starting new task')
// // start-sync
// const {readFile , writeFile } = require('fs')
// console.log('start')
// readFile('./content/first.txt','utf8',(err,result) => {
// if(err){
//     console.log(err)
//     return
// }
// const first = result
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result
//     writeFile('./content/result.txt',
//     `result : ${first},${second}`,
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('done with task')
//     })
// })
// })
// console.log('starting with next task')
// // HTTP
// const http=require('http')
// const server = http.createServer((req,res) => {
//     res.write('welcome to our home page')
//     res.end()
// })
// server.listen(4000)
// // request
// const http=require('http')
// const server = http.createServer((req,res) => {
//     console.log(req)
//     res.write('welcome to our home page')
//     res.end()
// })
// server.listen(4000)
// // '/' home page
// const http=require('http')
// const server = http.createServer((req,res) => {
//     if (req.url==='/'){
//         res.end('Welcome to our home page')
//     }
//     if (req.url==='/about'){
//         res.end('here is our portal')
//     }
// })
// server.listen(4000)
// //DOUBT
//  const http = require('http')
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//       res.end('Welcome to our home page')
//       return
//     }
//     if (req.url === '/about') {
//       res.end('Here is our short history')
//       return
//     }
//     res.end(`
//     <h1>Oops!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//     `) 
// })
//  server.listen(4000)
const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `) 
  }
})
server.listen(4000)


