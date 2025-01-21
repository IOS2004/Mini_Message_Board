const express = require('express')
const path = require('path')
const app = express();
const hostname = 'localhost';
const port = 8080;
const { indexRouter } = require('./routes/indexRoute');
const messageRouter = require('./routes/messageRoute');
const detailRouter = require('./routes/detailRoute');

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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});