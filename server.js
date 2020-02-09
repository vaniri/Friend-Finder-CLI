const express = require("express");
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require("./app/routing/apiRoutes.js");
const path = require("path");


const app = express();
const PORT = 3000;

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`)
})

