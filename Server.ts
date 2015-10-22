import app = require("./App");
var debug = require("debug")("App");

var port = process.env.port || 1337;

var server = app.listen(port, function ()
{
    debug("Debug started");
    console.log("Started on " + server.address().address + ":" + server.address().port);
});