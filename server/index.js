const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');

const app = express();

var profile = require('./profile')
var contact = require('./contact')


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', profile)
app.use('/contact', contact)


//set views directory to ./views
app.set('views', './views');

//set default engine to ejs
app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});
