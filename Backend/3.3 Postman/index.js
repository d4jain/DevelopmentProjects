import express from "express"

const app = express();
const port =3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Home Page</h1>");
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