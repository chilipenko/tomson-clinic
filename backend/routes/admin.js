const express = require('express');
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');


const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ where: { login } });
    if (admin) {
      const passwordMatch = bcrypt.compare(password, admin.password)
      if (passwordMatch) {
        req.session.isAuthorized = true;
        req.session.admin = admin;
        res.json({auth: true})
      }
    } else {
      res.json({
        // message: `Администратор ${login} не существует`,
        auth: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ auth: false , error: error})
  }
})

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
})

module.exports = router;
