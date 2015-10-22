import express = require("express");
var exphbs = require("express-handlebars");
import React = require("react");
var ReactDOM = require("react-dom/server");
var Home = React.createFactory(require("./views/Home"));

var app = express();
var hbs = exphbs.create({
    extname: "hbs",
    defaultLayout: "layout"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use("/react", express.static(__dirname + "/views"));

app.get("/", (req, res) =>
{
    res.render("index", { viewModel: ReactDOM.renderToString(Home()) });
});

export = app;