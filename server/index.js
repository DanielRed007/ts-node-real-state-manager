"use strict";
exports.__esModule = true;
var express_1 = require("express");
var houses_route_1 = require("./routes/houses.route");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
dotenv_1["default"].config();
mongoose_1["default"].Promise = global.Promise;
var app = (0, express_1["default"])();
var port = process.env.PORT;
mongoose_1["default"].connect('mongodb://localhost/real-state')
    .then(function () { return console.log('connection successful'); })["catch"](function (err) { return console.error(err); });
app.use("api/houses", houses_route_1["default"]);
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server!!!');
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});
