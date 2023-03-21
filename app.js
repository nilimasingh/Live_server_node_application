const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express());
app.use(bodyParser.urlencoded ({extended:false}));
app.use(bodyParser.json());


app.get("/testing",(req,res)=>{
    res.send("First Application");
})


app.listen(3000,()=>{
    console.log("Application is running");
})