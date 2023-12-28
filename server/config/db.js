const mongoose = require('mongoose')

function db() {
    mongoose.connect('mongodb:127.0.0.1:27017/mydata').then(() => {
        console.log("database connected");
    }).catch((err) => {
        console.log("Eror in Dattaase", err);
    })
}

