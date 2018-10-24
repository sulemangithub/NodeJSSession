/*const getUser = ()=>{
    setTimeout(()=>{
        return {"name":"sachin gupta"};
    },1000)
}

console.log(getUser());
*/

const getUser = (cb)=>{
    setTimeout(()=>{
        cb({name:"sachin gupta"});
    },1000);
}

getUser((data)=>{
   console.log(data); 
});



