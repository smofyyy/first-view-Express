import express from "express";
import path from "path";

const __dirname = path.resolve();
const jsonParser = express.json();
const app = express();

app.post("/user", jsonParser, (req, res) => {
    console.log(req.body);
    if(!req.body) {
        return res.sendStatus(400);
    } 
    res.send(req.body)
})

app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => console.log("server started"));
