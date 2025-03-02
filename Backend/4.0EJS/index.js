import express from "express";

const app = express();
const port = 3000;

const day = new Date()
const daynum =day.getDay();

app.get("/" , (req, res)=>{
    res.render("index.ejs", 
        (daynum == 0|| daynum == 6)? 
        {dayType: "weekend", advice: "It's time to have some fun!"} :
        {dayType: "weekday", advice: "It's time to work hard!"} 
        
    );
});

app.listen(port , ()=>{
    console.log("Server runinng on port: "+port);
});

// const day = new Date()
// const daynum =day.getDay();

// if(daynum == 1 || daynum == 2 || daynum == 3 || daynum == 4 || daynum == 5 )
// console.log("Hey It's Weekday its time to work hard");
// else if( daynum == 0|| daynum == 6)
// console.log("Hey It's Weekend Its time to have some fun");