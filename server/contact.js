var express = require('express')
var router = express.Router()

//middleware specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.render('contact')
})

router.post('thanks', (req, res) => {
   // res.send('thanks', { contact: req.body })
   res.send('Thank You')
})


module.exports = router