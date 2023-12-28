const mongoose = require('mongoose')

const db =async () => {
   await mongoose.connect('mongodb+srv://hacker:123@cluster0.g54zrui.mongodb.net/dark_forums').then(() => {
        console.log("database connected");
    }).catch((err) => {
        console.log("Eror in Dattaase", err);
    })
    mongoose.set('bufferCommands', false);

}


module.exports = db;

