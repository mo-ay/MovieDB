const express = require('express')
const app = express()
const port = 3003


const movies = [
    { title: 'Jaws', year: 1975, rating: 8,id :1 },
    { title: 'Avatar', year: 2009, rating: 7.8 ,id :2},
    { title: 'Brazil', year: 1985, rating: 8 ,id :3},
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 ,id :4}
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
        res.status(500).send('status:500, error:true, message:"you have to provide a search"')
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

app.get('/movies/read/by-date', (req, res) => {
    movie= movies.sort((a,b)=>{
        if ( a.year< b.year){
            return 1;
          }
          if ( a.year> b.year){
            return -1;
          }
          return 0;
    })
    r = ""
    movie.forEach(e=> 
        r += "rating: "+e.rating +" title: " + e.title
        + " year: "+ e.year +"<br>");
    res.send('status :200 , data :'+ r)
})
app.get('/movies/read/by-rating', (req, res) => {
    movie= movies.sort((a,b)=>{
        if ( a.rating< b.rating){
            return 1;
          }
          if ( a.rating> b.rating){
            return -1;
          }
          return 0;
    })
    r = ""
    movie.forEach(e=> 
        r += "rating: "+e.rating +" title: " + e.title
        + " year: "+ e.year +"<br>");
    res.send('status :200 , data :'+ r)
})
app.get('/movies/read/by-title', (req, res) => {
    movie= movies.sort((a,b)=>{
        if ( a.title< b.title){
            return -1;
          }
          if ( a.title> b.title){
            return 1;
          }
          return 0;
    })
    r = ""
    movie.forEach(e=> 
        r += "rating: "+e.rating +" title: " + e.title
        + " year: "+ e.year +"<br>");
    res.send('status :200 , data :'+ r)
})
app.get('/movies/read/id/:id', (req, res) => {
    movie = ""
    r = false
    movies.forEach(e=> {
        if(req.params.id == e.id){
            movie = e.title + " " + e.year +" "+ e.rating;
            r=true;
        }
    });
    if(r){
        res.send('status :200 , data :'+ movie)
    }else{
        
        res.status(404).send("status:404, error:true, message:'the movie <ID> does not exist");

  // respond with html page
  
}
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