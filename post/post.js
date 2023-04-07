import express from "express";
import path from "path"

const app = express();
const __dirname = path.resolve();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });

app.post("/", urlencodedParser, function (req, res) {
    if (!req.body) {
        return response.sendStatus(400);
    }

    console.log(req.body);
    res.send(`${req.body.userName} - ${req.body.userAge}`);
});

// app.get("/products/:productId", function (request, response) {
//     response.send("productId: " + request.params["productId"])
//   });

app.listen(5000, () => console.log("server started"));