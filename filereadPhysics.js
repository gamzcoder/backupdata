const fs = require('fs');
let mysql=require('mysql');
let express=require('express')
let app =express();
let bodyParser= require('body-parser')
var path=require('path');
const request = require('resquest') 
// var session=require('express-session');

let readFile = fs.readFileSync("./outputPhysics11th.json","utf8")
let parsee=JSON.parse(readFile);
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'USER'
});

conn.connect(function(err){
    if(err) throw err;
    console.log("database is connected successfully");
});

var js=JSON.parse(readFile);
console.log(boject)
// // console.log(js[59]);

// for(let i=0;i<60;i++){
  

//   console.log(js[i]);

//   // console.log(Object.values(js[i]));
// }
/*for sending data calling url */
request('http://192.168.29.45/data',)

