const {Router} = require('express');
const indexRouter = Router();
const db = require('../db/queries');


indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {title: "Message Board", messages: messages});
})

module.exports = { indexRouter };
