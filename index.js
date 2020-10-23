const express = require('express')
const app = express()
const port = 3001


const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]



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
app.get('/movies/create', (req, res) => {
    res.send('status :200 , message: "ok" ' )
})
app.get('/movies/read', (req, res) => {
    r = ""
    movies.forEach(e=> 
        r += "rating: "+e.rating +" title: " + e.title
        + " year: "+ e.year +"<br>");
    res.send('status :200 , data :'+ r)
})
app.get('/movies/update', (req, res) => {
    res.send('status :200 , message: "ok" ' )
})
app.get('/movies/delete', (req, res) => {
    res.send('status :200 , message: "ok" ' )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})