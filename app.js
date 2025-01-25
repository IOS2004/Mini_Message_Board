const express = require('express')
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;
require("dotenv").config();
const { indexRouter } = require('./routes/indexRoute');
const messageRouter = require('./routes/messageRoute');
const detailRouter = require('./routes/detailRoute');
const { body, validationResult } = require("express-validator");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/new', messageRouter);
app.use('/detail', detailRouter);
app.use('/', indexRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});