require("dotenv").config(); //for .env file with config details
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// initialising the app
const app = express();

//Defining the port
const PORT = process.env.PORT || 5000;

//Middleware to run when any call is made
app.use(express.static(path.join(__dirname, "/public"))); //static for accessing html/css/image files inside public folder

//Set view engine to pug
app.set("views", "./views");
app.set("view engine", "ejs");

//HOME page--------------------------------------------------------------------------------
// get companies list
const data = require('./companies.json')
const KG_API_KEY = process.env.API_KEY;
app.get("/", (req, res) => {
    // res.send("Hello World")
    res.render("cfairmap.ejs", {
        companies: data,
        GOOGLE_KG_API_KEY: KG_API_KEY
    });
});

// starts a server and listens on PORT for connections.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});