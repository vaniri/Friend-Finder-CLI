const express = require("express");
const path = require("path");
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = 3000;

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});

