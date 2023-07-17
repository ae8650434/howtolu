// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由

app.get('/', function (req, res) {
    var sql = 'SELECT * FROM product_class';
    DB.query(
        sql, function (err, data) {
            if (err) {
                res.send("無法查詢資料");
            } else {
                res.send( JSON.stringify(data) );
                // console.log("888888",req.session.howtolu)
            }
        }
        )
        
})

module.exports = app;