var express = require('express')
var router = express.Router()
var fs = require('fs')
var myCss = {
    style : fs.readFileSync('./style.css','utf8')
}

//middleware specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//send template output by filename
router.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Sam',
            lastName: 'Kim',
        }
    }

    res.send('index', data);
});

//define the home page route
router.get('/', function (req, res) {
    res.render('index', {
        myCss: myCss
    });
});

//define the about route
router.get('/about', function (req, res) {
    res.send('About me')
})


module.exports = router