const noteController = require('../../controllers/notes');
const router = require('express').Router();

module.exports = router
    .get('/', noteController.index)
    .post('/', noteController.create)