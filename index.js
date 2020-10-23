const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('ok')
})
app.get('/test', (req, res) => {
    res.send("status :200 , message: 'ok'")
})
app.get('/time', (req, res) => {
    hour = new Date().getHours();
    second = new Date().getSeconds();
    message = "status :200 , message: " + hour + " : " +  second
    res.send(message)
})

app.get('/hello/:ID', (req, res) => {
    res.send('status :200 , message: "hello" ,' + req.params.ID)
})
app.get('/hello', (req, res) => {
    res.send('status :200 , message: "hello" ,' )
})
app.get('/search', (req, res) => {
    if(req.query.s){
        res.send('status :200 , message: "ok" , data : ' +req.query.s)
    }else{
        res.send('status:500, error:true, message:"you have to provide a search"')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})