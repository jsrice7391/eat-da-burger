const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const exphb = require("express-handlebars");

var port = process.env.PORT || 8000;


// Allow boy barser to parse the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow the assets folder to be used for static content
app.use("/public", express.static("public"));

// Establish the engine as Handlebars and useing the Default view as the main.handlebars file
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create some routers
require("./controller/burgers_controller")(app);


// Start the app
app.listen(port, function() {
    console.log("APP is listening on Port: " + port);
});