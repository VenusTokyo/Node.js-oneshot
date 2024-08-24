const { add, minus, multiply,pie, divide } = require('./math') //destructured import
const os=require('os') //os module
const fs=require('fs')
console.log(add(56, 79))
console.log(minus(1390, 79))
console.log(multiply(17, 9))
console.log(divide(56, 4))
console.log(pie)

console.log(os.platform())
console.log(os.arch())
console.log(__filename)

const msg='Hello Im shruitka and iam learinging node js'
fs.writeFile('eg.txt',msg, (err)=>{ //writefile takes 3 args, path to file to be written, data and a callback fn
    console.log(err)
})
fs.readFile('eg1.txt',"utf8",(err,data)=>{
    if(err){
        console.log("an unexpcted error occured",err)
    }
    else{
        console.log(data)
    }
})

const logMessage = (message) => {
    const log = `${new Date().toISOString()} - ${message}\\n`;
    fs.appendFile('server.log', log, (err) => {
      if (err) throw err;
    });
  };
  
  logMessage('Server started');
