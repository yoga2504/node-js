// // console.log('express tutorial')
// const http = require('http')
// const {readFileSync} = require('fs')
// const homePage = readFileSync('./index.html')
// const aboutPage = readFileSync('./about.html')
// // const stylee=readFileSync('./st/yle.css')
// const homeStyles = readFileSync('./style.css')
// const homeLogic = readFileSync("./browser-app.js");


// const server = http.createServer((req,res)=>{ 
//     const url=req.url
//     if(url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(homePage)
//         res.end()
//     }
//     else if(url==='/about'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(aboutPage)
//         res.end()
//     }
//     else if (url === "/style.css") {
//         res.writeHead(200, { "content-type": "text/css" });
//          res.write(homeStyles);
//          res.end();
//        }
       
//        else if (url === "/browser-app.js") {
//         res.writeHead(200, { "content-type": "text/javascript" });
//         res.write(homeLogic);
//         res.end();
//       }
   
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write('<h1>page not found</h1>')
//         res.end()
//     }
    
// })

// server.listen(5100)

// const express = require('express')
// const app = express()
// app.listen(4000,()=>{
//     console.log('server is listening on port 4000')
// })

//app.get
//app.post
//app.delete
//app.put
//app.all
//app.use
//app.listen

// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send('Homepage')
// })
// app.listen(4000,()=>{
//     console.log('server is listening on port 4000')
// })

// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     console.log('server hit the resource')
//     res.send('Homepage')
// })
// app.listen(4000,()=>{
//     console.log('server is listening on port 4000')
// })

// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     console.log('server hit the resource')
//     res.send('Homepage')
// })
// app.get('/about',(req,res)=>{
//     res.send('about page')
// })
// app.listen(4000,()=>{
//     console.log('server is listening on port 4000')
// })

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   console.log('user hit the resource')
//   res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//   res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(4000, () => {
//   console.log('server is listening on port 4000...')
// })

// const express = require('express')
// const path=require('path')
// const app=express()
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar_app/index.html'))
//   })
  
//   app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
//   })
  
//   app.listen(4000, () => {
//     console.log('server is listening on port 4000...')
//   })

// const express = require('express')
// const path=require('path')
// const app=express()
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'./navbar_app/index.html'))
//   })
  
//   app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
//   })
  
//   app.listen(4000, () => {
//     console.log('server is listening on port 4000...')
//   })

// const express = require('express')
// const path = require('path')
// const app = express()
// app.use(express.static('./public'))

// // app.get('/', (req, res) => {
// //   res.sendFile(path.resolve(__dirname, './navbar_app/index.html'))
// // })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(4000, () => {
//   console.log('server is listening on port 4000....')
// })

// json basics 

// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.json([{name1:'peter'},{name2:'john'}])
// })
// app.listen(4000,()=>{
//     console.log("server is listening on port 4000")
// })
// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.json(products)
// })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

//params query string
// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     res.json(products)
// })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=>product.id==1)
//     res.json(singleProduct)
//     })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/1',(req,res)=>{
//     console.log(req)
//     console.log(req.params)
//     const singleProduct = products.find((product)=>product.id==1)
//     res.json(singleProduct)
//     })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:ProductId',(req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     const {ProductId} = req.params
//     const singleProduct = products.find((product)=>product.id===Number(ProductId))
//     res.json(singleProduct)
//     })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })
// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:ProductId',(req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     const {ProductId} = req.params
//     const singleProduct = products.find((product)=>product.id===Number(ProductId))
//     console.log(singleProduct)
//     res.json(singleProduct)
//     })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:ProductId',(req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     const {ProductId} = req.params
//     const singleProduct = products.find((product)=>product.id===Number(ProductId))
//     if(!singleProduct){
//         return res.status(404).send('Product Does Not Exist')
//     }
//     return res.json(singleProduct)
//     })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:ProductId',(req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     const {ProductId} = req.params
//     const singleProduct = products.find((product)=>product.id===Number(ProductId))
//     if(!singleProduct){
//         return res.status(404).send('Product Does Not Exist')
//     }
//     return res.json(singleProduct)
//     })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:ProductId',(req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     const {ProductId} = req.params
//     const singleProduct = products.find((product)=>product.id===Number(ProductId))
//     if(!singleProduct){
//         return res.status(404).send('Product Does Not Exist')
//     }
//     return res.json(singleProduct)
//     })
//     app.get('/api/products/:productID/reviews/:reviewId',(req,res)=>{
//         console.log(req.params)
//         res.send('hello world')
//     })
//     app.get('/api/v1/query',(req,res)=>{    
//         // console.log(req.query)
//         const{search,limit}=req.query
//         let SortedProducts=[...products]
//         if(search){
//             SortedProducts=SortedProducts.filter((product)=>{
//                 return product.name.startsWith(search)
//             })
//         }
//         if (limit){
//             SortedProducts = SortedProducts.slice(0,Number(limit))
//         }
//         if(SortedProducts.length<1){
//             return res.status(200).json({success : true, data:[]})
//         }
//         return res.status(200).json(SortedProducts)
//         // res.send('hello world')

//     })
    
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app = express()
// const logger=require('./logger')
// const authorize=require('./authorize')
// app.use([authorize,logger])

// app.get('/',(req,res)=>{
//     res.send('home')
// })
// app.get('/about',(req,res)=>{
//     res.send('about')
// })
// app.get('/api/products',(req,res)=>{
//     res.send('products')
// })
// app.get('/api/items',(req,res)=>{
//     res.send('items')
// })
// app.listen(4000,()=>{
//     console.log('server is listening')
// })

// const express = require('express')
// const app = express()
// const morgan = require('morgan')
// const logger = require('./logger')
// const authorize = require('./authorize')
// //  req => middleware => res

// // app.use([logger, authorize])
// // app.use(express.static('./public'))
// app.use(morgan('tiny'))

// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })

// const express = require('express')
// const app=express()
// let {people} = require('./data')

// app.use(express.static('./methods-public'))
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })
// app.post('/api/people',(req,res)=>{
//     const {name} = req.body
//     if(!name){
//         return res.status(400).json({success:false, msg:'please provide name value'})
//     }
// })
// app.listen(4000,()=>{
//     console.log("server is listening")
// })

// const express = require('express')
// const app=express()
// let {people} = require('./data')

// app.use(express.static('./methods-public'))
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })
// app.post('/api/people',(req,res)=>{
//     const {name} = req.body
//     if(!name){
//         return res.status(400).json({success:false, msg:'please provide name value'})
//     }
//     res.status(201).send(`welcome ${name}`)
// })
// app.post('/login',(req,res)=>{
//     const {name}= req.body
//     if(name){
//         return res.status(201).send(`welcome ${name}`)
//     }
// })
// app.listen(4000,()=>{
//     console.log("server is listening")
// })
//get postman
// const express = require('express')
// const app = express()
// let { people } = require('./data')

// // static assets
// app.use(express.static('./methods-public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// // parse json
// app.use(express.json())

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, data: [...people, name] })
// })

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`)
//   }

//   res.status(401).send('Please Provide Credentials')
// })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })
// put postman
// const express = require('express')
// const app = express()
// let { people } = require('./data')

// // static assets
// app.use(express.static('./methods-public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// // parse json
// app.use(express.json())

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, data: [...people, name] })
// })

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`)
//   }

//   res.status(401).send('Please Provide Credentials')
// })
// app.put('/api/people/:id',(req,res)=>{
//     const { id }= req.params
//     const{ name }=req.body
//     console.log(id,name)
//     res.send('hello world')
// })
///// change name with given id
// const express = require('express')
// const app = express()
// let { people } = require('./data')

// // static assets
// app.use(express.static('./methods-public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// // parse json
// app.use(express.json())

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, data: [...people, name] })
// })

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`)
//   }

//   res.status(401).send('Please Provide Credentials')
// })

// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })
// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })
//delete post man 
// const express = require('express')
// const app = express()
// const people = require('./routes/people')

// // static assets
// app.use(express.static('./methods-public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// // parse json
// app.use(express.json())

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, data: [...people, name] })
// })

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`)
//   }

//   res.status(401).send('Please Provide Credentials')
// })

// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })

// app.delete('/api/people/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` })
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   )
//   return res.status(200).json({ success: true, data: newPeople })
// })

// app.listen(4000, () => {
//   console.log('Server is listening on port 4000....')
// })


const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(4000, () => {
  console.log('Server is listening on port 4000....')
})