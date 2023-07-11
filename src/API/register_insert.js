// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
// var password = 'a12345678'

// console.log(password)

app.post("/", (req, res) => {
  var mname = req.body.mname;
  var phone = req.body.phone;
  var email = req.body.email;
  var rowpassword = req.body.password;
  var date = new Date();
  // 密碼加密
  const saltRounds = 10;
  bcrypt.hash(rowpassword, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error during password hashing");
      return;
    }
    

    var sql =
      "INSERT INTO member(name, tel, password, mail, register_time) VALUES (?,?,?,?,?)";
    DB.query(sql, [mname, phone, hash, email, date], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error during registration');
      }

      res.status(200).send('Registration successful');
    });
  });
});


module.exports = app;
