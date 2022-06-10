require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { notFound, errorHandler } = require('./error');

const port = process.env.SERVER_PORT || 3003;

let corsOptions = {
  origin: process.env.CORS_ORIGIN,
}

const app = express();
app.use(morgan("common"));
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use(cors(corsOptions));

require("./api/submission.route")(app);
require("./api/tick.route")(app);
require("./api/user.route")(app);

// For sending emails in dev
if ("development" == app.get("env")) {
  console.log("Rejecting node tls");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

app.get('/', (req, res) => {
  res.send(`The server is working: ${new Date()}`)
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at ${process.env.SERVER_URL}:${port}`);
});

module.exports = app;
