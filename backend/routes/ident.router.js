const express = require('express');

const app = express();
const router = express.Router();

// Timetable from IDENT
router.post('/PostTimeTable', async (req, res) => {
  try {
    app.locals.incomingJson = req.body;
    console.log("app.locals.incomingJson from ident", app.locals.incomingJson);
  } catch (error) {
    console.log(error);
    res.status(401).json({error: error})
  }
  res.status(200).end();

})

// Appointments from website to IDENT
// router.get('/GetTickets', async (req, res) => {
//   const query = req.query;

//   //dateTimeFrom
//   //dateTimeTo
//   try {
 
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({error: error})
//   }
// })



router.get('/gettimetable', async (req, res) => {
  console.log("app.locals.incomingJson from app.locals", app.locals.incomingJson);
  res.json(app.locals.incomingJson);
})

router.get('/', async (req, res) => {
  // IDENT-Integration-Key
  res.status(200).end();
})

module.exports = router;
