require("dotenv/config");

var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.DBURL);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
