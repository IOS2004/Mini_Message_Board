const {Router} = require('express');
const db = require('../db/queries');
const messageRouter = Router();

messageRouter.get('/', async (req, res) => {
  const id = req.query.id;
  if (!id)
    res.render('detail' , {message : null});
  else
  {
    const message = await db.getMessageById(id);
    res.render('detail', {message : message});
  }
})

module.exports = messageRouter;