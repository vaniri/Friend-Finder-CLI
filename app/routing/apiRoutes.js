const express = require('express');
const router = express.Router();
const path = require("path");
const users = require("../model/friends.js");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/friends", (req, res) => {
  users.storeUser(req.body);
  res.status(201).json({ message: "Saved user profile successfully!" });
});

router.get("/friends", (req, res) => {
  res.json(users.getAllUsers());
})


module.exports = router;