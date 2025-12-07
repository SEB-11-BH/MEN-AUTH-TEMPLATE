const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/sign-up', async (req, res, next) => {
  res.render('auth/sign-up.ejs');
});

router.post('/sign-up', async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  // make sure the user does not exist
  const userInDatabase = await User.findOne({ username });

  if (userInDatabase) {
    res.send('Username or Password is invalid');
  }
  // validate the passwords match
  if (password !== confirmPassword) {
    res.send('Username or Password is invalid');
  }
  // take the password and encrypt in some way.
  // If the above passes, then let's create the account
  // with the encrypted password.
  // when that succeeds let's go ahead and "sign the person in"
  // rediret them to some page
  res.send(req.body);
});

module.exports = router;
