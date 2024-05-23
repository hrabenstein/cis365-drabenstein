//imports
const fs = require('fs'); //file system
const path = require('path'); //gives path to where a specific file is
const express = require('express'); //a framework

const app = express(); //creating an app with the constructor express

//get the json of whatever is being called
//tell node to use json and http header feature in body-parser-HTTP SETTINGS
//'.use'  =  example of middleware (interceptor)
// it's setting up something when there's a rewuest coming in
app.use(express.json);
app.use(express.urlencoded({extended: true}));


//path that will oin your directory name, it will add on the folder name and then the file name
const jsonPath = path.json(__dirname, 'data','photos.json');
const jsonData = fs.readFileSync(jsonPath,'utf8');

const photos = json.parse(jsonData);

/////////////////////////////////////////////////////////////////////////////////

app.use('/static',express.static(path.join(__dirname,'public')));

//the most important piece is app.listen...you need this if you actually want to get something working
//you really need app.listen with the port
app.get('/',(req,resp) => {
    console.log('hello');
    resp.json(photos)});

    //return just requested photo
    //ex: localhost:8080/1
app.get('/:id',(req,resp) => {
    const idToFind = req.params.id;
    const matches = photos.filter(obj => idToFind == obj.id);
    resp.json(matches);
});

//return photos from country
app.get('/iso/:substring',(req,resp) => {
    const isoToFind = req.params.substring.toUpperCase();
    const matches = photos.filter(obj => isoToFind == obj.iso);
    resp.json(matches);
})

//IMPORTANT
//use express to listen to port
let port = 3000;
app.listen(port, () => {
    console.log('I am listening on my port ' + port);
});