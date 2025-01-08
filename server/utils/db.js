const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/booksearch")
.then(()=>{console.log("Connection successful")})
.catch(()=>{console.log("Connection unSuccessful")})