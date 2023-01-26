const express = require("express");
const path = require('path');
const app = express();
var cors = require('cors');

const v1AuthRoutes = require('./routes')

// cors
app.use(cors({ origin: true, credentials: true }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Init Middleware
// app.use(express.json({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and auth API" });
});

app.use('/api/v1/users', v1AuthRoutes)

const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

