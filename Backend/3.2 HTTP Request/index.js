import express from "express"

const app = express();
const port =3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World !!</h1>");
});

app.get("/about",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send(`<div><h1>Welcome to D's World !!</h1>
        <p> I am currently persuing my bachelors in Computer Science Engineering from Bennett Universiyt 
        and I aspire to become the World's Best Software Developer </p></div>`);
});

app.get("/contact",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Contact me on : d4jain.sj@gmail.com</h1>");
});

app.get("/contact/phone",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Contact me on : 9870XXXXXX</h1>");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});

app.put("/user/deepanshi",(req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/deepanshi",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/deepanshi",(req,res)=>{
    res.sendStatus(200);
});

app.listen(port,()=> {
    console.log("Server running on port: "+port);
})