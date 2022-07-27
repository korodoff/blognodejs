const express = require ("express");
const app = express()
 const dataRouter = require("./routes/data")
// app.get("/home", function(req,res){
//     res.send("home")
// })


app.use("/api", dataRouter)

app.listen(9090, function(){
    console.log("Application is Running")
})