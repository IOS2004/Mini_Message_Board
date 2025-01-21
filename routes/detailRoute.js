const {Router, request} = require('express');
const { messages } = require('./indexRoute');
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  const index = req.query.id;
  if (!index)
    res.render('detail' , {message : null});
  else
    res.render('detail', {message : messages[index]});
})

module.exports = messageRouter;