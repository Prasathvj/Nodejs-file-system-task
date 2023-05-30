const express = require('express');
const fs = require('fs')
const path = require('path')
const dirName = path.join(__dirname,"currentTimeStamps")
console.log(dirName)

//step-1 initilize the express server framework
const app  = express();

app.get("/",(req,res)=>{
    res.send("hey there this is my first server😘")
})

app.get("/date-time",(req,res)=>{
    
    let date = new Date();
    let currentTimeStamp= date.toUTCString().slice(0 ,-3)
    //res.send(currentTimeStamp)
    let content = `The last updated timestamp : ${currentTimeStamp}`
    let originalTime = currentTimeStamp;
    let modifiedTime = originalTime.split(/[ ,:]+/).join("");
    //or
    //let modifiedString = originalString.split(" ").join("").split(",").join("").split(":").join("")

console.log(modifiedTime);


    fs.writeFile(`${dirName}/${modifiedTime}.txt`, content, (err)=>{
        if (err) {
            console.log(err)
            res.send("error in writing the file")
            return
        } else {
            res.sendFile(path.join(dirName,`${modifiedTime }.txt`))
        }
    })
})

//step-2 listen to a server
app.listen(9000, ()=>console.log('Server started in localhost:9000'))