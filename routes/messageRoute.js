const {Router} = require('express');
const messageRouter = Router();
const db = require('../db/queries');

messageRouter.get('/', (req, res) => {
  res.render('new');
})

messageRouter.post('/', async (req, res) => {
  const author = req.body.name;
  const message = req.body.message;
  await db.insertMessage(author, message);
  res.redirect('/');
})

module.exports = messageRouter;