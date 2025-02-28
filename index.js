const express = require('express')
const cookieParser = require('cookie-parser')
const {authRouter} = require('./routes/auth')
const {instituteRouter} = require('./routes/institute')
const {donorRouter} = require('./routes/donor')
const mongoose = require('mongoose')
const path = require("path");
const app = express()
app.use(express.json()) 
app.use(cookieParser())
app.use(express.urlencoded())
// Set EJS as the template engine
app.set("view engine", "ejs");

// Set views folder
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth",authRouter)
app.use("/institute",instituteRouter)
app.use("/donor",donorRouter)
// Landing Route
app.get("/", (req, res) => {
    res.render("landing");
});



mongoose.connect('mongodb+srv://rishex:nykGG3hDWdTVeP8O@rishex.3cjff.mongodb.net/Techhorizon')
.then(()=>{
    console.log("Connection Established !!");
    app.listen(3000,()=>{
        console.log("Listening..");
})
})
.catch(()=>{
    console.log("Connection Not Established !!");
})