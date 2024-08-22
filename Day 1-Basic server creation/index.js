const http=require('http') //http is a inbuilt module
const server=http.createServer((req,res)=>{ //this creates a server taking a function that will run when the req is sent
    console.log(req.url) //prints request url
    res.end("Hello World!") // respont at the end
})
server.listen(5000,()=>{
    console.log("Server running on port 5000") //server listens at port 5000 and when server is created a it run the callback function 
})