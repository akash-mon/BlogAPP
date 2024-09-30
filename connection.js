const mongoose = require("mongoose");
//Write missing code here for database connection

const mongo_uri='mongodb+srv://akashajay10:akash242810@cluster0.9ltch.mongodb.net/BlogDB?retryWrites=true&w=majority&appName=Cluster0';
// 'mongodb+srv://akashajay10:akash242810@cluster0.9ltch.mongodb.net/Blog_DB?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongo_uri).then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('connection not established');
})

