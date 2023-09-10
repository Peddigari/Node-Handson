const http = require("http")
const express=require("./index2")
const port = 3000;

const jsonobject= [{
    "what is NODEJS":"NodeJs is a open source cross platform javascript runtime environment that is executed outside the browser.it is a single threaded non blocking operations.",
    "batch":"EA23",
    "course":"Full Stack developer"
},
{
    "name":"shravya",
    "batch":"EA23",
    "course":"Full Stack developer"
},
{
    "name":"Sarika",
    "batch":"EA23",
    "course":"Full Stack developer"
}]
const app = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>what is NodeJS</h1>");
        res.write("<p><ul><li>NodeJs is a open source cross platform javascript runtime environment that is executed outside the browser<br/>it is a single threaded non blocking operations.</li></ul></p>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("i am aboutus page");
        res.end();
    }
    else if(req.url=="/contact"){
        res.write("I am contactus page")
        res.end();
    }
    else if(req.url=="/fetchAPI"){
        const data=JSON.stringify(jsonobject)
        res.write(data);
        res.end()
    }
    else{
        res.write("<html>")
        res.write("<h1>")
        res.write("page not found go to home page")
        res.write("</h1>")
        res.write("</html>")
        res.end();

    }
});
app.listen(port,()=>{
    console.log(`i am port number ${port}`)
});