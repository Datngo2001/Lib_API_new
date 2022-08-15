import express from "express"
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Dat')
})

app.listen(3001)
console.log("http://localhost:3001/")