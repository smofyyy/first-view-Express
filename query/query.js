import express from "express";
  
const app = express();

app.get("/", function(request, response){
      
    response.send("<h1>Главная страница</h1>");
});


app.use("/about", function(request, response){
    let id = request.query.id;
    let userName = request.query.name; // http://localhost:5000/about?id=5&name=Alex
    console.log(id, userName);
    response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
});
 
// app.use("/about", function(request, response){
      
//     console.log(request.query);
//     let id = request.query.user.id;
//     let name = request.query.user.name;  // передача более сложных объектов
//     console.log(request.query);          // http://localhost:5000/about?user[id]=5&user[name]=Alex
//     response.send("<h3>id:" + id + "<br>name: " + name +"</h3>");
// });

app.listen(5000, () => console.log("server started"));