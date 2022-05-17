const express = require('express')
const app = express()
const port = 4000;

const bodyParser = require("body-parser");

app.use(bodyParser());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})
  
  app.post('/login', (req, res) => {
   const { username, password }  = req.body;
   if (username === "yehia" && password === "123") {
       res.redirect("/home")
   } else {
       res.send("invalid password")
   }
  })
  
  app.get('/home', (req, res) => {
    res.send("welcome")
   })
   


app.listen(process.env.PORT || port, () => {
  console.log(`http://localhost:${port}`)
})