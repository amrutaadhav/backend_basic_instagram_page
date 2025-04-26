const express = require("express");
const app = express();

const port = 8080;
app.set("view engine","ejs");
app.listen(port,()=>{
    console.log(`listening on port${port}`);

});
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
});