const express = require("express")
const path=require('path')
const cors = require("cors");
const http = require('http')

const cookieParser = require('cookie-parser')
require("./db/ConnectDB");


const { routesInit } = require('./Router')

const app = express();
app.use(cors({
  origin:true,
  credentials:true
}));

app.use(express.json());

app.use(cors());


app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")))

const port = 3000

routesInit(app);

const server = http.createServer(app);

server.listen(port);////HHHHHHH

