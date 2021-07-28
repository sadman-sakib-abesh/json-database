const fs = require('fs');


const get =(file)=>{
    var text = fs.readFileSync(file,'utf8')
    return JSON.parse(text)
}


const post=(file,data)=>{
    var text = fs.readFileSync(file,'utf8')
        
        let load = JSON.parse(text);
        load.push(data)
        fs.writeFileSync(file,JSON.stringify(load));
    
}


const getByKey =(file,key,value)=>{
   let txt= fs.readFileSync(file,'utf8')
    let arr=[]
   let data=JSON.parse(txt)

for(var i =0;i<data.length;i++){
    if(data[i][key]===value){
        arr.push(data[i])
    }
}


   
    return arr
 
}

const remove =(file,key,value)=>{
    let txt= fs.readFileSync(file,'utf8')
    let data=JSON.parse(txt)

   const i=data.findIndex(data=> data[key]=== value);
   
   data.splice(i,1)
   fs.writeFileSync(file,JSON.stringify(data));

}

const getIndex=(file,key,value)=>{
    let txt= fs.readFileSync(file,'utf8')
    let data=JSON.parse(txt)

   const i=data.findIndex(data=> data[key]=== value);
   
   return i
}



console.log(get('https://sadman-sakib-abesh.github.io/json-ad-instruction-for-claps/slide-our.json'))

//module.exports={
   // get,
   // post,
   // getByKey,
   // remove,
   // getIndex
 // };