const express = require ("express")
const datacontroller = require("../controller/data")

const dataRouter = express.Router() // we arer linking our data.js file with our /api main
dataRouter.route("/details") //creating a route
.get(datacontroller.Blogdata)// calling the data.js in controller folder

module.exports = dataRouter;