const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const http = require("http").createServer(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: "*"
}))

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MYSQL database is connected successfully")
});

// http://localhost:4000/api/user/list
app.get("/api/user/list", (request, response) => {
  var sql_query = `SELECT * from karthick_kumar`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send(result);
  })
})

// http://localhost:4000/api/user/create
app.post("/api/user/create", (request, response) => {
  var name = request.body.name;
  var age = request.body.age;
  var location = request.body.location;
  var grade = request.body.grade;

  var sql_query = `INSERT INTO karthick_kumar (name, age, location, grade) VALUES ('${name}', ${age}, '${location}', '${grade}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is created successfully"
    });
  })
})

// http://localhost:4000/api/user/edit/1

app.put("/api/user/edit/:id", (request, response) => {
  var id = request.params.id;

  var name = request.body.name;
  var age = request.body.age;
  var location = request.body.location;
  var grade = request.body.grade;

  var sql_query = `UPDATE karthick_kumar SET name='${name}', age=${age}, location='${location}', grade='${grade}' WHERE Id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is profile has been updated successfully"
    });
  })
})

// http://localhost:4000/api/user/delete/1
app.delete("/api/user/delete/:id", (request, response) => {
  var id = request.params.id;

  var sql_query = `DELETE FROM karthick_kumar WHERE Id=${id}`;
  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User profile has been deleted successfully"
    });
  })

});



const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on port 4000");
});