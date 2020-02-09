const express = require('express');
const router = express.Router();
const path = require("path");
const users = require("../model/friends.js");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/friends", (req, res) => {
  res.status(201).json({ result: users.findMatch(req.body) });
  users.storeUser(req.body);
});

router.get("/friends", (req, res) => {
  res.json(users.getAllUsers());
})


module.exports = router;