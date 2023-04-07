import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Стартовая страничка</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>О сайте</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Контакты</h1>");
});

app.listen(5000, () => console.log("server started."));