"use strict";
exports.__esModule = true;
var express_1 = require("express");
var House_ts_1 = require("../models/House.ts");
var router = express_1["default"].Router();
router.get('/', function (req, res, next) {
    House_ts_1["default"].find(function (err, products) {
        if (err)
            return next(err);
        res.json(products);
    });
});
router.get('/:id', function (req, res, next) {
    House_ts_1["default"].findById(req.params.id, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
router.post('/', function (req, res, next) {
    House_ts_1["default"].create(req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
router.put('/:id', function (req, res, next) {
    House_ts_1["default"].findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
router["delete"]('/:id', function (req, res, next) {
    House_ts_1["default"].findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
module.exports = router;
