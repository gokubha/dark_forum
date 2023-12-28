const User = require('../Apis/User/UserModel')
const bcrypt = require('bcrypt')

User.findOne({Email:"admin@gmail.com"}).then((data)=>{
    if(data == null){
        let admin = User({
            Username:'Admin',
            Password:bcrypt.hashSync('123', 10),
            Email:'admin@gmail.com',
            UserType:'1'
        })
        admin.save().then((result)=>{
            console.log('Admin Created');
        })
    }else {
        console.log("Admin already Exists");
    }
}).catch((err)=>{
    console.log("Error in admin ", err.message);
})