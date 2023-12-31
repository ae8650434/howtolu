// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由

app.get('/:fid', function (req, res) {
    var sql = 'SELECT * FROM food where fid=?';
    DB.query(
        sql, [req.params.fid], function (err, data) {
            if (err) {
                res.send("無法查詢資料");
            } else {
                res.json(data);
            }
        }
        )
        
})

module.exports = app;