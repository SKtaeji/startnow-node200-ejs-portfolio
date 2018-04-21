const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const client = require("twilio")(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

const app = express();

const profile = require("./profile");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..\\public")));
app.use(express.static(path.join(__dirname, "..\\img")));
app.use("/", profile);

app.post("/thanks", (req, res) => {
  const data = {
    user: {
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName
    }
  };
  client.messages
    .create({
      to: "+16198171489", // Text this number
      from: "+18584375270", // From a valid Twilio number
      body: req.body.user.email
    })
    .then(message => {
      res.render("thanks", data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

app.get("*", function(req, res) {
  res.send("Whoops, page not found 404").status(404);
});

//set views directory to ./views
app.set("views", "./views");

//set default engine to ejs
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
