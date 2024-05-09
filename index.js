const expres = require("express");
const app = expres();
const port = 3000;
const env = require("dotenv");
env.config();

app.get("/", function(req,resp){
   resp.send("welcome to backend");
});

app.listen(process.env.PORT, ()=>{
    console.log("listnong ....")
})