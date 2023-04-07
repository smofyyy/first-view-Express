import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(function (request, response) {
    response.sendFile(__dirname + "\\index.html");
});
 
// app.use("/home/foo/bar",function (request, response) {
//     response.sendStatus(404)
// });

// app.use("/home/foo/bar",function (request, response) {
//     response.status(404).send(`Ресурс не найден`);
// });

app.listen(5000, () => console.log("server started"));