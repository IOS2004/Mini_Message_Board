const {Router} = require('express');
const { messages } = require('./indexRoute');
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  res.render('new');
})

messageRouter.post('/', (req, res) => {
  const author = req.body.name;
  const message = req.body.message;
  messages.push({
    text: message,
    user: author,
    added: new Date()
  });
  res.redirect('/');
})

module.exports = messageRouter;