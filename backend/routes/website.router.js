const express = require('express');

const router = express.Router();

router.get('/timetable', async (req, res) => {
  res.json(app.locals.incomingJson);
})

// router.post('/PostTimeTable', async (req, res) => {
//   try {
//     console.log("req.body", req.body);
//     app.locals.incomingJson = req.body;
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({error: error})
//   }
//   res.status(200).end();

// })

module.exports = router;