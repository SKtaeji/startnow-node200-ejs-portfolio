var express = require('express')
var router = express.Router()

var accountSid = 'AC0f1c2b1ad47d2cb0debe5ee2234e4359'; // Your Account SID from www.twilio.com/console
var authToken = 'b8dbe60ce56fb7d96541f16a46ce8f15';   // Your Auth Token from www.twilio.com/console

const dotenv = require('dotenv')

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

//middleware specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.render('index')
})

router.post('thanks', (req, res) => {
   res.send('Thank you', { index: req.body.firstName })
   client.messages.create({
    body: 'Hello from Node',
    to: '+18584727697',  // Text this number
    from: '+18584375270' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
})



module.exports = router