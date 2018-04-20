var express = require('express')
var router = express.Router()

var twilio = require('twilio');
var client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

//middleware specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('thanks', (req, res) => {
    client.messages.create({
        body: 'Hello from Node',
        to: '+18584727697',  // Text this number
        from: '+18584375270' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    res.render('Thank you', { index: req.body.firstName })
})



module.exports = router