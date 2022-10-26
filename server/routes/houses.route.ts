import express from 'express';
import mongoose from 'mongoose';
import House from "../models/House";

const router = express.Router();

router.get('/', function(req, res, next) {
    House.find(function (err:any, products:any) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/:id', function(req, res, next) {
    House.findById(req.params.id, function (err:any, post:any) {
      if (err) return next(err);
      res.json(post);
    });
});

router.post('/', function(req, res, next) {
    House.create(req.body, function (err:any, post:any) {
      if (err) return next(err);
      res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    House.findByIdAndUpdate(req.params.id, req.body, function (err:any, post:any) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    House.findByIdAndRemove(req.params.id, req.body, function (err:any, post:any) {
      if (err) return next(err);
      res.json(post);
    });
});

export default router;