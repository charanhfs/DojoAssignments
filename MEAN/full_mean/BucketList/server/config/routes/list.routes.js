const listController = require('../../controllers/list');
const router = require('express').Router();

module.exports = router
  .get('/', listController.index)
  .post('/', listController.create)
 