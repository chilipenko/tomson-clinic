const express = require('express');



const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log("req.body", req.body);
  } catch (error) {
    console.log(error);
    res.status(401).json({ auth: false , error: error})
  }
  res.status(200).end();

})

router.get('/', async (req, res) => {
  // IDENT-Integration-Key
  res.status(200).end();
})

module.exports = router;
