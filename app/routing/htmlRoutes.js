const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(path.join(__dirname));
     //let page = fs.readFileSync("./app/public/index.html");
    //res.send(page.toString());
  });

  router.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  module.exports = router;