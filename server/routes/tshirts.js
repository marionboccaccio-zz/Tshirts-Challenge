const express = require("express");
const router = new express.Router();
const tshirtModel = require("./../models/Tshirt");

router.get("/tshirts", (req, res) => {
  tshirtModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.get("/tshirts/:id", (req, res) => {
  tshirtModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.post("/tshirts", (req, res) => {
  tshirtModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

module.exports = router;
