const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

//const fs = require("fs");

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(3000, function () {
    console.log('Server Activated on port 3000')
})
