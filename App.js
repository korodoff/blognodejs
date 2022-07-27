const express = require ("express");
const app = express()
 const dataRouter = require("./routes/data")
// app.get("/home", function(req,res){
//     res.send("home")
// })


app.use("/api", dataRouter)

app.listen(process.env.PORT||8080, function(){
    console.log("Application is Running")
})