const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())


app.use(express.urlencoded({
extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "database",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//routing part
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/labas/:id', (req, res) => {
  res.send(`Pats tu ${req.params.id}.`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})