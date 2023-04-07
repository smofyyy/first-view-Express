import express from "express";

const app = express();

const expressRouter = express.Router();

expressRouter.use("/create", (req, res) => { // привязываем к /products маршрут /create
    res.send("Добавление товаров")
})

expressRouter.use("/:item", (req, res) => { // привязываем к /products товар и его итемом
    console.log("sadasdadadsasd");
    res.send(`Товар: ${req.params.item}`)
})

expressRouter.use("/", (req, res) => {
    res.send("Список продуктов")
})

app.use("/products", expressRouter);

app.use("/about", (req, res) => {
    res.send("О сайте")
})

app.use("/", (req, res) => {
    res.send("<h1>Главная страничка</h1>");
})

app.listen(5000, () => console.log("server started"));