const authController = require('../../controllers/user');
const router = require('express').Router();

module.exports = router
  .post('/login', authController.login)
  .delete('/logout', authController.logout);