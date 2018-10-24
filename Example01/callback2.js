const users = new Map();
users.set("sachin@gmail.com",{email:"sachin@gmail.com",password:"pass@123",name:"sachin gupta",age:21,phone:"909090",department:"DT"});
users.set("ramesh@gmail.com",{email:"ramesh@gmail.com",password:"pass@123",name:"ramesh gupta",age:22,phone:"909090",department:"IES"});

const departments = new Map();
departments.set("DT",{name:"DT",location:"Pune",manager:"Kumar S"});
departments.set("IES",{name:"IES",location:"Mumbai",manager:"Vashisth K"});

const authenticate = (email,password,callback)=>{

    let status = false;

    if(users.has(email))
    {
        let user = users.get(email);
        if(user.password == password)
        {
            status = true;            
        }        
    }
 
    setTimeout(()=>{
        callback({status:status});
    },1000);
    
}

const getUser = (email,callback)=>{

    let user = users.get(email);

    setTimeout(()=>{
        callback(user);
    },1000);
}

const getDepartmentDetails = (departmentName,callback)=>{

    let department = null;

    if(departments.has(departmentName))
    {
        department = departments.get(departmentName);
    }

    setTimeout(()=>{
        callback(department);
    },1000);

}

authenticate("sachin@gmail.com","pass@123",(status)=>{    
    
    if(status)
    {
        getUser("sachin@gmail.com",(user)=>{
            if(user != null)
            {
                getDepartmentDetails(user.department,(details)=>{
                    console.log(details);
                })
            }
        })
    }
    else{
        console.log("Invalid email or password");
    }
});