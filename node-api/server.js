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



const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on port 4000");
});