const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helper');


app.use(express.static(__dirname + "/public"))


hbs.registerPartials(__dirname + '/views/parciales');


const port = process.env.PORT || 3000;



app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Yirony"
    });

})


app.get('/about', (req, res) => {
    res.render('about');

})



app.listen(port, () => {
    console.log(`Escuchando  peticiones en el puerto localhost:${port}`)
})