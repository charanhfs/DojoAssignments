const authController = require('../../controllers/user');
const router = require('express').Router();

module.exports = router
  .post('/login', authController.login)
  .get('/users', authController.users)
  .delete('/logout', authController.logout);