import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("middleware #1");
    next()
})

app.use((req, res, next) => {
    console.log("middleware #2");
    next()
})

app.use("/about", (req, res, next) => {
    console.log("get запрос на about страничку");
    res.send("<h1>О сайте</h1>");
})

app.get("/", (req, res) => {
    console.log("get запрос на стартовую страничку");
    res.send("<h1>Стартовая страничка</h1>");
})

app.listen(5000, () => console.log("server started"));


// РЕАЛИЗАЦИЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ЗАПРОСЕ И ЗАПИСЫВАНИЯ ЕГО В ФАЙЛ

// import fs from "fs";
 
// const app = express();
// app.use(function(request, response, next){
     
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
//     console.log(data);
//     fs.appendFile("server.log", data + "\n", function(){});
//     next();
// });
 
// app.get("/", function(request, response){
//     response.send("Hello");
// });
// app.listen(5000, () => console.log("server started"));