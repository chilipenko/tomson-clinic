const express = require('express');

const app = express();
const router = express.Router();


router.post('/PostTimeTable', async (req, res) => {
  try {
    // console.log("req.body", req.body);
    app.locals.incomingJson = req.body;
    console.log("app.locals.incomingJson from ident", app.locals.incomingJson);
  } catch (error) {
    console.log(error);
    res.status(401).json({error: error})
  }
  res.status(200).end();

})

router.get('/gettimetable', async (req, res) => {
  console.log("app.locals.incomingJson from app.locals", app.locals.incomingJson);
  res.json(app.locals.incomingJson);
})

router.get('/', async (req, res) => {
  // IDENT-Integration-Key
  res.status(200).end();
})

module.exports = router;
