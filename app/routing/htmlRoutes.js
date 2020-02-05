const express = require('express');
const router = express.Router();
const fs = require("fs");

const bodyParser = require('body-parser');

router.get("/", function(req, res) {
    let page = fs.readFileSync("./app/public/index.html");
    res.send(page.toString());
  });

  router.get("/survey", function(req, res) {
    let page = fs.readFileSync("./app/public/survey.html");
    res.send(page.toString());
  });

  module.exports = router;