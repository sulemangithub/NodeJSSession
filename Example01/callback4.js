/* Promise example */

const users = new Map();
users.set("sachin@gmail.com",{email:"sachin@gmail.com",password:"pass@123",name:"sachin gupta",age:21,phone:"909090",department:"DT"});
users.set("ramesh@gmail.com",{email:"ramesh@gmail.com",password:"pass@123",name:"ramesh gupta",age:22,phone:"909090",department:"IES"});

const departments = new Map();
departments.set("DT",{name:"DT",location:"Pune",manager:"Kumar S"});
departments.set("IES",{name:"IES",location:"Mumbai",manager:"Vashisth K"});

const authenticate = (email,password)=>{

return new Promise(function(resolve,reject){

    let status = false;

    if(users.has(email))
    {
        let user = users.get(email);
        if(user.password == password)
        {
            status = true;            
        }        
    }

    if(status)
    {
        resolve({status:true});
    }
    else
    {
        reject({status:false});
    }
});
}

const getUser = (email)=>{

    return new Promise(function(resolve,reject){

        if(users.has(email))
        {
            resolve({user:users.get(email)});
        }
        else
        {
            reject({user:null});
        }
    });
}

const getDepartmentDetails = (departmentName)=>{

    return new Promise(function(resolve,reject){
        if(departments.has(departmentName))
        {
            resolve(departments.get(departmentName));
        }
        else
        {
            reject(null);
        }


    });
};

authenticate("sachin@gmail.com","pass@123").then(data=>{
    return getUser("sachin@gmail.com");
}).then(result=>{
    return getDepartmentDetails(result.user.department);
}).then(result=>{
    console.log(result);
}).catch(error=>{
    console.log("An error occurred..."+error);
})

console.log("still running...");
