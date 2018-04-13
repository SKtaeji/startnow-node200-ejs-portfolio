var express = require('express')
var router = express.Router()

//middleware specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//define the home page route
router.get('/', function (req, res) {
    res.send('Hello world')
});

//define the about route
router.get('/about', function (req, res) {
    res.send('About me')
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


module.exports = router