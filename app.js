const express = require('express');
const app = express();

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/getWeather', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(5000, ()=>{
    console.log('port running on 5000');
})