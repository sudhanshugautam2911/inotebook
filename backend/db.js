 const mongoose = require('mongoose');

 const mongoURI = "mongodb+srv://sudhanshu2911:2911gautam@cluster0.qpdrzzm.mongodb.net/test"
//  const mongoURI = "mongodb://localhost:27017/"
//  const mongoURI = "mongodb+srv://sudhanshu2911:2911gautam@cluster0.qpdrzzm.mongodb.net/?retryWrites=true&w=majority"

 const connectToMong = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("connection done to mongo")
    })
 }

 module.exports = connectToMongo;
