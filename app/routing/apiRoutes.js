const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/friends", (req, res) => {
    console.log(req.body.name, req.body.photo, req.body.scores);
  });


  module.exports = router;