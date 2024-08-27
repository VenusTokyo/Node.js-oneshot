//asynchronous using callbacks and settimeout
function makesandwich(cb){
    console.log('started')
    cb()
    setTimeout(()=>{
        console.log('processing')
        cb()
    },3000)
    console.log('ended')
}
function callback(){
    console.log('ingredients recevied')
}
makesandwich(callback)


//promises 
const available=true
const checkavailablity=()=>{
const promise=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        if(available){
            resolve("Data found")
    
        }
        else{
            reject("Data not found")
    
        }
    },3000)
    console.log('inside promise')
    
})
return promise
}

//promises using then and catch

checkavailablity().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//promises using async await

async function respose() {
    try{
    const data= await checkavailablity()
    console.log('awaiting') //this runs only after the above function has completed its execution
    console.log(data)
    }
    catch(err){
        
    console.log(err)
    }
}
respose()